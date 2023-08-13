
$(document).ready(function() {
	$('#multiscroll').multiscroll();
});

$.fn.animate_Text = function() {
    var string = this.text();
    return this.each(function(){
    var $this = $(this);
    $this.html(string.replace(/./g, '<span class="new">$&</span>'));
    $this.find('span.new').each(function(i, el){
    setTimeout(function(){ $(el).addClass('div_opacity'); }, 20 * i);
    });
    });
   };
   $('#name').show();
   $('#name').animate_Text();

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'right',
      hoverEnabled: false
    });
  });
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, 0);
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, 576);
});

let fotoArr = ['./DSC_1003.jpg', './DSC_1009.jpg', './DSC_1000.jpg']
let foto = document.getElementById('foto')
let menu = document.getElementById('menu')
let myInfo = document.getElementById('myInfo')
let myProject = document.getElementById('myProject')
let mySkills = document.getElementById('mySkills')
let myContact = document.getElementById('myContact')
let goHome = document.getElementById('goHome')
let multiscroll = document.getElementById('multiscroll')
let smallSize = document.getElementById('smallSize')
let partSkills = document.getElementById('skills')
let partContacts = document.getElementById('contact')
let partProject = document.getElementById('project')
let timerId = 0, i = 1, choose

let myChart1 = document.getElementById('myChart1')
let myChart2 = document.getElementById('myChart2')
let myChart3 = document.getElementById('myChart3')
let myChart4 = document.getElementById('myChart4')
let myChart5 = document.getElementById('myChart5')
let myChart6 = document.getElementById('myChart6')

let contactFooterEmail = document.getElementById('contactFooterEmail')

window.addEventListener('load', function(){
    foto.src = `${fotoArr[0]}`
    timerId = setInterval(function(){
        if(i == fotoArr.length) i = 0
        foto.src = `${fotoArr[i]}`
        i++
    }, 1800)

})

// contactFooterEmail.addEventListener('click', function(){
//     // contactFooterEmail.select()
//     console.log( contactFooterEmail.innerHTML)
//     document.execCommand("copy")
    
//     alert(`${contactFooterEmail.innerText}`)
// })



goHome.addEventListener('click', function(){
    partContacts.style.display = 'none'
    partSkills.style.display = 'none'
    partProject.style.display = 'none'
    console.log(document.documentElement.clientWidth)
    if(document.documentElement.clientWidth <= 767) {
        smallSize.style.display = 'flex'
        multiscroll.style.display = 'none'
    } else  if (document.documentElement.clientWidth > 767) {
        multiscroll.style.display = 'flex'
        smallSize.style.display = 'none'
    }
   
})
myInfo.addEventListener('click', function(){
    multiscroll.style.display = 'none'
})
mySkills.addEventListener('click', function(){
    multiscroll.style.display = 'none'
    smallSize.style.display = 'none'
    partContacts.style.display = 'none'
    partProject.style.display = 'none'
    partSkills.style.display = 'flex'
    // document.body.overflow = 'auto'
new Chart(myChart1, { 
        type: 'doughnut',
        data: {
            labels: ['HTML5 knowledge', 'Knowledge in progress'],
        datasets: [{
            label: ' % ', 
            data: [87, 13],
            backgroundColor: ['rgb(42, 182, 119)', 'rgba(53, 53, 53, 0.1)'],
            hoverOffset: 8,
            hoverBackgroundColor: ['rgb(5, 63, 38)', 'rgba(53, 53, 53, 0.5)']
        }]}, 
        options:{
            plugins: {
            legend: { display: false}
            }
        }
})
new Chart(myChart2, { 
        type: 'doughnut',
        data: {
            labels: ['CSS3 knowledge', 'Knowledge in progress'],
        datasets: [{
            label: ' % ', 
            data: [87, 13],
            backgroundColor: ['rgb(32, 152, 100', 'rgba(53, 53, 53, 0.1)'],
            hoverOffset: 8,
            hoverBackgroundColor: ['rgb(5, 63, 38)', 'rgba(53, 53, 53, 0.5)']
        }]}, 
        options:{
            plugins: {
            legend: { display: false}
            }
        }
})
new Chart(myChart3, { 
        type: 'doughnut',
        data: {
            labels: ['Bootstrap knowledge', 'Knowledge in progress'],
        datasets: [{
            label: ' % ', 
            data: [80, 20],
            backgroundColor: ['rgb(22, 144, 89)', 'rgba(53, 53, 53, 0.1)'],
            hoverOffset: 8,
            hoverBackgroundColor: ['rgb(5, 63, 38)', 'rgba(53, 53, 53, 0.5)']
        }]}, 
        options:{
            plugins: {
            legend: { display: false}
            }
        }
})
new Chart(myChart4, {
        type: 'doughnut',
        data: {
            labels: ['Materialize knowledge', 'Knowledge in progress'],
        datasets: [{
            label: ' % ', 
            data: [75, 25],
            backgroundColor: ['rgb(16, 108, 66)', 'rgba(53, 53, 53, 0.1)'],
            hoverOffset: 8,
            hoverBackgroundColor: ['rgb(5, 63, 38)', 'rgba(53, 53, 53, 0.5)']
        }]}, 
        options:{
            plugins: {
            legend: { display: false}
            }
        }
})
new Chart(myChart5, {
        type: 'doughnut',
        data: {
            labels: ['Java Script knowledge', 'Knowledge in progress'],
        datasets: [{
            label: ' % ', 
            data: [70, 30],
            backgroundColor: ['rgb(11, 85, 52)', 'rgba(53, 53, 53, 0.1)'],
            hoverOffset: 8,
            hoverBackgroundColor: ['rgb(5, 63, 38)', 'rgba(53, 53, 53, 0.5)']
        }]}, 
        options:{
            plugins: {
            legend: { display: false}
            }
        }
})
new Chart(myChart6, {
        type: 'doughnut',
        data: {
            labels: ['Java Script library jQuery knowledge', 'Knowledge in progress'],
        datasets: [{
            label: ' % ', 
            data: [67, 33],
            backgroundColor: ['rgb(6, 75, 44)', 'rgba(53, 53, 53, 0.1)'],
            hoverOffset: 8,
            hoverBackgroundColor: ['rgb(5, 63, 38)', 'rgba(53, 53, 53, 0.5)']
        }]}, 
        options:{
            plugins: {
            legend: { display: false}
            }
        }
    })
})

myContact.addEventListener('click', function(){
    multiscroll.style.display = 'none'
    smallSize.style.display = 'none'
    partSkills.style.display = 'none'
    partProject.style.display = 'none'
    partContacts.style.display = 'flex'
})
myProject.addEventListener('click', function(){
    multiscroll.style.display = 'none'
    smallSize.style.display = 'none'
    partSkills.style.display = 'none'
    partContacts.style.display = 'none'
    partProject.style.display = 'flex'
    // partProject.style.bottom='450px'

})





