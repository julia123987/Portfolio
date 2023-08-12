
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

let fotoArr = ['./DSC_1003.jpg', './DSC_1009.jpg', './DSC_1000.jpg']
let foto = document.getElementById('foto')
let menu = document.getElementById('menu')
let myInfo = document.getElementById('myInfo')
let myProject = document.getElementById('myProject')
let mySkills = document.getElementById('mySkills')
let myContact = document.getElementById('myContact')
let multiscroll = document.getElementById('multiscroll')
let timerId = 0, i = 1, choose

window.addEventListener('load', function(){
    foto.src = `${fotoArr[0]}`
    timerId = setInterval(function(){
        if(i == fotoArr.length) i = 0
        foto.src = `${fotoArr[i]}`
        i++
    }, 1800)
})

myInfo.addEventListener('click', function(){
    multiscroll.style.display = 'none'
})