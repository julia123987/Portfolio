// Audio
// play() -
// pause() - 
// paused - стан відтверення. Якщо зупинено true
// currentTime - поточна позиція відтворення звуку (секунди скільки програло)
// duration - тривалість
// muted - встановити стан звуку. Якщо true -- включити звук
// ended - якщо true, то програвання завершено


let musicArray = [
    {id: 1, title: 'Californication', name: "Red Hot Chili Pepper", url: 'Red Hot Chili Peppers - Californication (1).mp3', cover: 'https://www.smartartistsmemorabilia.com/wp-content/uploads/2019/07/Red-Hot-Chili-Peppers-Californication-In-Store-Poster-1999.jpg'},
    {id: 2, title: 'Can`t Stop', name: 'Red Hot Chili Pepper', url: `Red Hot Chili Peppers - Can't Stop.mp3`, cover: 'https://i1.sndcdn.com/artworks-000652827601-jd2ruu-t500x500.jpg'},
    {id: 3, title: 'Буревіями', name: 'SHUMEI & Zlata Ognevich', url: 'shumei-zlata-ognevich-bureviyami-(meloua.com).mp3', cover: 'https://notatky.com.ua/wp-content/uploads/2023/04/b974a3ec88919e15da54b64dd32decc5-1.jpg'},
    {id: 4, title: 'Дежавю (UA Version)', name: 'Artem Pivovarov', url: 'Артем Пивоваров - Дежавю (UA Version).mp3', cover: 'https://novy.tv/wp-content/uploads/sites/96/2020/07/unnamed-1.jpg'},
    {id: 5, title: 'Жовті мальви', name: 'Wellboy', url: 'Wellboy - Жовті мальви.mp3', cover: 'https://i1.sndcdn.com/artworks-AVlkGWO6243byvDP-PPb2ZA-t500x500.jpg'},
    {id: 6, title: `Wild World`, name: 'Mr Big', url: 'Mr_Big_-_Wild_World_(musmore.com).mp3', cover: 'https://i1.sndcdn.com/artworks-000144229891-jmgymz-t500x500.jpg'},
    {id: 7, title: 'Heart of Steel', name: 'TVORCHI', url: 'tvorchi-heart-of-steel-(meloua.com).mp3', cover: 'https://womanmagazine-npp.com/wp-content/uploads/2022/12/TVORCHI0-1-1-e1671871088993.jpg'},
    {id: 8, title: 'Гуси', name: 'Wellboy', url: 'wellboy-gusi-(meloua.com).mp3', cover: 'https://notatky.com.ua/wp-content/uploads/2021/06/gusi-400.jpg'},
    {id: 9, title: 'До Весни', name: 'Artem Pivovarov & Zlata Ognevich', url: 'Артем Пивоваров - До Весни (feat. Злата Огневич).mp3', cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/78/ac/bc/78acbc79-62cb-3c45-6d5e-8ad5cf3c5091/196626891624.jpg/316x316bb.webp'},
    {id: 10, title: `It's a beautiful day`, name: 'Tim McMorris', url: 'Tim_McMorris_-_Its_a_Beautiful_Day_(musmore.com).mp3', cover: 'https://i1.sndcdn.com/artworks-000066947091-z1yypm-t500x500.jpg'}
]
let time = document.getElementById('time'), timeAll = document.getElementById('timeAll'), player = document.getElementById('player'), source = document.getElementById('source'), play = document.getElementById('play'), pause = document.getElementById('pause'), volume = document.getElementById('volume')
let lbNext = document.getElementById('lbNext'), lbPrev = document.getElementById('lbPrev')
let lbPlay = document.getElementById('lbPlay'), lbPause = document.getElementById('lbPause')
let lbVolumeNone = document.getElementById('lbVolumeNone'), lbVolume = document.getElementById('lbVolume')
let lbiteration = document.getElementById('lbiteration'), lbMix = document.getElementById('lbMix')
let foto = document.getElementById('foto'), name = document.getElementById('name'), myTitle = document.getElementById('myTitle')
let myDuration = document.getElementById('duration')
let count = 0, count2 = 0, i = 0, id, mixSingle = false, pauseTime

function getCorrectformat(time){
    return (time < 10) ? '0' + time : time
}
function splitTime (sec){
    return getCorrectformat(Math.floor(sec/60)) + ":" + getCorrectformat(Math.floor(sec%60))
}
function getRandomSingle(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}
lbiteration.addEventListener('click', function(){
    count++
    if(count%2 != 0){
        iter.classList.add('BtnStyle')
        player.loop = true
    } else if (count%2 == 0) {
        iter.classList.remove('BtnStyle')
        player.loop = false
    }   
})
lbMix.addEventListener('click', function(){
    count2++
    if (count2%2 == 0) {
        mixSingle = false
        imgMix.classList.remove('BtnStyle')
    } else {
        mixSingle = true
        imgMix.classList.add('BtnStyle')
    }
})
play.addEventListener('click', function(){
    console.log(typeof(pauseTime), player.currentTime)
    lbPlay.style.display = 'none'
    lbPause.style.display = 'inline'
    foto.style.display = 'inline' 
    if(player.paused){
        player.src = musicArray[i].url
        name.innerText = `${musicArray[i].name}`
        myTitle.innerText = `${musicArray[i].title}`
        foto.src = `${musicArray[i].cover}`
        player.play()
        // player.currentTime = pauseTime
        id = setInterval(function(){
        myDuration.value = 0
        myDuration.min = 0
        myDuration.max = `${player.duration}`
        myDuration.step = `${player.duration/100}`
        console.log(myDuration)
        myDuration.value += `${player.currentTime}`
            time.innerText = `${splitTime(player.currentTime)}`
            timeAll.innerText = `${splitTime(player.duration)}`
            if(player.currentTime == player.duration){
                console.log(i, mixSingle)
                if(!mixSingle){
                    ++i
                    player.src = musicArray[i].url 
                    name.innerText = `${musicArray[i].name}`
                    myTitle.innerText = `${musicArray[i].title}`
                    foto.src = `${musicArray[i].cover}`
                    player.play()
                } else if (mixSingle){
                    i = getRandomSingle(0, 10)
                    console.log(mixSingle)
                    player.src = musicArray[i].url
                    name.innerText = `${musicArray[i].name}`
                    myTitle.innerText = `${musicArray[i].title}`
                    foto.src = `${musicArray[i].cover}`
                    player.play()
                }            
            }
        }, 1000)   
    }
    lbNext.addEventListener('click', function(){
        lbPlay.style.display = 'none'
        lbPause.style.display = 'inline'
        if(!mixSingle){
            ++i
            player.src = musicArray[i].url 
            name.innerText = `${musicArray[i].name}`
            myTitle.innerText = `${musicArray[i].title}`
            foto.src = `${musicArray[i].cover}`
            player.play()
        } else if (mixSingle){
            i = getRandomSingle(0, 10)
            player.src = musicArray[i].url
            name.innerText = `${musicArray[i].name}`
            myTitle.innerText = `${musicArray[i].title}`
            foto.src = `${musicArray[i].cover}`
            player.play()
        }   
    })
    lbPrev.addEventListener('click', function(){
        lbPlay.style.display = 'none'
        lbPause.style.display = 'inline'
        if(!mixSingle){
            --i
            player.src = musicArray[i].url 
            name.innerText = `${musicArray[i].name}`
            myTitle.innerText = `${musicArray[i].title}`
            foto.src = `${musicArray[i].cover}`
            player.play()
        } else if (mixSingle){
            i = getRandomSingle(0, 10)
            player.src = musicArray[i].url
            name.innerText = `${musicArray[i].name}`
            myTitle.innerText = `${musicArray[i].title}`
            foto.src = `${musicArray[i].cover}`
            player.play()
        }   
    })
})
pause.addEventListener('click', function(){
    lbPlay.style.display = 'inline'
    lbPause.style.display = 'none'
    player.pause()
    pauseTime = Math.floor(player.currentTime)
    clearInterval(id)  
})
volume.addEventListener('input', function(){
    player.volume = volume.value
})
lbVolumeNone.addEventListener('click', function(){
    volume.value = 0
    player.volume = 0
})
lbVolume.addEventListener('click', function(){
    volume.value = 1
    player.volume = 1
})
myDuration.addEventListener('input', function(){
    player.currentTime = myDuration.value  
})
