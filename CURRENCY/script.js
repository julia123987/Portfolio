// fetch(url)
//     // .then() обробка отриманої відповіді
//     // .catch() обробка помилок
//     // .finally() кінцевий код



// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
//     .finally(() => console.log('Final!'))


//----Pract----//
let myDate = document.getElementById('myDate'), from = document.getElementById('cur1'), toCurrency = document.getElementById('cur2'), listMonthRate = document.getElementById('cur3'), myAmount = document.getElementById('myAmount'), ok = document.getElementById('ok'), resultRate = document.getElementById('result'), max = 80, arrCurrency = [], latest = document.getElementById('latest'), tableLatest = document.getElementById('tableLatest'), dateForLatest = document.getElementById('dateForLatest')
let day = new Date().getDate(), month = new Date().getDate()+1, year = new Date().getFullYear()
if (day < 10) day = `0${new Date().getDate()}`
if (month < 10) month = `0${new Date().getMonth()+1}`
let today = `${year}-${month}-${day}`
let myCurrency = ['USD', 'UAH', 'GBP', 'PLN', 'CHF', 'BGN', 'ILS', 'CAD', 'CZK', 'LTL'], labels = [], series = []
let prev = document.getElementById('prev'), next = document.getElementById('next')
let myMonth = document.getElementById('myMonth'), ok2 = document.getElementById('ok2'), graphic = document.getElementById('graphic')
let k = 0

window.addEventListener('load', function(){
    myDate.value = `${year}-${month}-${day}`
    dateForLatest.innerText = `${today}`
    let currencySymbols = `https://api.exchangerate.host/symbols`
    let xhrCurrency = new XMLHttpRequest(); 
    xhrCurrency.open('GET', currencySymbols, false);
    xhrCurrency.send();
    let currencySymbolsList = JSON.parse(xhrCurrency.responseText)
    console.log(currencySymbolsList.symbols)
    for(let element in currencySymbolsList.symbols){
        arrCurrency.push(element)
        let optionListFrom = document.createElement('option'), optionListTo = document.createElement('option')
        from.appendChild(optionListFrom)
        toCurrency.appendChild(optionListTo)
        optionListFrom.value = element
        optionListFrom.innerHTML = `${element} (${currencySymbolsList.symbols[element].description})`
        optionListTo.value = element  
        optionListTo.innerHTML = `${element} (${currencySymbolsList.symbols[element].description})`
    }

    for(let i = 0; i < 10; i++){
        let tr = document.createElement('tr'), td1 = document.createElement('td'), td2 = document.createElement('td')
        tableLatest.appendChild(tr)
        tr.appendChild(td1)
        tr.appendChild(td2)  
        tableLatest.rows[i].cells[0].innerHTML = myCurrency[i]
        let xhr = new XMLHttpRequest(); 
        xhr.open('GET', `https://api.exchangerate.host/convert?from=${myCurrency[i]}&to=EUR&amount=100&date=${new Date().getFullYear}-${new Date().getMonth}-${new Date().getDate()}&/`, false);
        xhr.send();
        let info = JSON.parse(xhr.responseText)
        tableLatest.rows[i].cells[1].innerHTML = `${info.result}`    
    }
    prev.addEventListener('click', function(){
        k++
        for(let i = 0; i < myCurrency.length; i++){
        let xhr = new XMLHttpRequest(); 
        let urlPrev = `https://api.exchangerate.host/convert?from=${myCurrency[i]}&to=EUR&amount=100&date=${year}-${month}-${day-k}&/`
            xhr.open('GET', urlPrev, false);
            xhr.send();
            let info = JSON.parse(xhr.responseText)
            console.log(info.result)
            tableLatest.rows[i].cells[1].innerHTML = `${info.result}`
            dateForLatest.innerText = `${info.date}`
        }
    })
    next.addEventListener('click', function(){
        k--
        for(let i = 0; i < myCurrency.length; i++){
        let xhr = new XMLHttpRequest(); 
        let urlNext = `https://api.exchangerate.host/convert?from=${myCurrency[i]}&to=EUR&amount=100&date=${year}-${month}-${day-k}&/`
            xhr.open('GET', urlNext, false);
            xhr.send();
            let info = JSON.parse(xhr.responseText)
            console.log(info.result)
            tableLatest.rows[i].cells[1].innerHTML = `${info.result}`
            dateForLatest.innerText = `${info.date}`
        }
    }) 

    for(let element of arrCurrency){
        let optionForMonthRates = document.createElement('option')
        listMonthRate.appendChild(optionForMonthRates)
        optionForMonthRates.value = element
        optionForMonthRates.innerHTML = `${element} (${currencySymbolsList.symbols[element].description})`
    }

    ok2.addEventListener('click', function(){
        graphic.innerHTML = ``
        let  infoDuringMonth = `https://api.exchangerate.host/timeseries?start_date=${myMonth.value}-01&end_date=${myMonth.value}-30&symbols=${listMonthRate.value}&base=EUR&amount=100`; 
        let requestMonthRates = new XMLHttpRequest(); 
        requestMonthRates.open('GET', infoDuringMonth, false);
        requestMonthRates.send();
        let getMonthRates = JSON.parse(requestMonthRates.responseText)
        // console.log(getMonthRates, myMonth.value, listMonthRate.value)
        for(let element in getMonthRates.rates){
        console.log(getMonthRates.rates[element])
            for(let rate in getMonthRates.rates[element]){
                console.log(element, rate, getMonthRates.rates[element][rate])
                // let text = document.createElement('p')
                // infoForGraphics.appendChild(text)
                // text.innerText = `${element}(EUR/${rate}) || ${getMonthRates.rates[element][rate]}`
                labels.push(element)
                series.push(getMonthRates.rates[element][rate])
            }
            let data = {
                x: labels,
                y: series,
                type: 'bar',
                text: series.map(String),
                textposition: 'auto',
                hoverinfo: 'none',
                opacity: 0.5,
                marker: {
                    color: 'rgb(158,202,225)',
                    line: {
                        color: 'rgb(8,48,107)',
                        width: 1.5
                    }
                }
            };
            let dataAll = [data];
            let layout = {
                title: `EUR/${listMonthRate.value} Currency Rates (during ${myMonth.value})`
            };
            var options = {
                width: 400,
                height: 100
            };
            var config = {responsive: true}
            Plotly.newPlot('graphic', dataAll, layout, options, config);
        }
})
})

ok.addEventListener('click', function(){
    let xhr = new XMLHttpRequest(); 
    xhr.open('GET', `https://api.exchangerate.host/convert?from=${from.options[from.options.selectedIndex].value}&to=${toCurrency.options[toCurrency.options.selectedIndex].value}&amount=${myAmount.value}&date=${myDate.value}&/`, false);
    xhr.send();
    let info = JSON.parse(xhr.responseText)
    resultRate.innerText = `${info.result}`
})



