// let canvas = document.getElementById('canvas')
// let context = canvas.getContext("2d")

//Лінії
// context.beginPath()
// context.moveTo(100, 100)
// context.lineTo(200, 200)
// context.stroke()

//Замкнуті фігури
// context.beginPath()
// context.moveTo(100, 100)
// context.lineTo(200, 100)
// context.lineTo(200, 200)
// context.closePath()
// context.lineWidth = 4
// context.strokeStyle = 'blueviolet'
// // context.lineJoin = 'miter' //(miter, bevel, round)
// context.fillStyle = 'black'
// context.fill()
// context.stroke()

// context.fillStyle = 'green'
// context.fillRect(100, 100, 50, 50)
// context.strokeStyle = 'red'
// context.lineWidth = 8
// context.strokeRect(100, 100, 50, 50)
// context.clearRect(130, 130, 35, 35)

// context.moveTo(100, 100)
// context.quadraticCurveTo(150, 0, 200, 100)
// context.lineWidth = 3
// context.strokeStyle = 'blueviolet'
// context.stroke()


// context.translate(100, 100)
// context.scale(2, 2)
// context.fillStyle = 'green'
// context.fillRect(0, 0, 100, 100)


//----------PAINT----------//
let arrColor = ['white', 'yellow', 'greenyellow', 'green', 'turquoise', 'teal', 'blue', 'blueviolet', 'indigo', 'fuchsia', 'darkmagenta', 'red', 'orange', 'orangered', 'black']
let canvas = document.getElementById('canvas'), paint = document.getElementById('paint'), pointX = document.getElementById('pointX'), pointY = document.getElementById('pointY')
let scaleInfo = document.getElementById('scaleInfo'), scaleMore = document.getElementById('scaleMore'), scaleLess = document.getElementById('scaleLess'), palitra = document.getElementById('palitra'), pencil = document.getElementById('pencil'), remove = document.getElementById('remove'), deleteAll = document.getElementById('deleteAll')
canvas.height = window.innerHeight 
canvas.width = window.innerWidth
let context = canvas.getContext("2d")
context.lineWidth = 5
context.lineJoin = 'round'
context.lineCap = 'round'
let startX = null, startY = null, draw = false, color, collectionColors
window.addEventListener('load', function(){
    for(let i = 0; i < arrColor.length; i++){
        color = document.createElement('input')
        color.type = 'button'
        color.className = 'btnColor'
        palitra.appendChild(color)
        collectionColors = document.getElementsByClassName('btnColor')
        color.dataset.id = i
        color.style.backgroundColor = arrColor[i]
        color.style.border = `1px solid ${arrColor[i]}`
        color.addEventListener('click', function(){ 
            let checked = this.dataset.id
            context.strokeStyle = arrColor[i]
            for(let l = 0; l < collectionColors.length; l++){
                collectionColors[l].classList.remove('btnColor2')   
            }
            if(i == checked) collectionColors[i].classList.add('btnColor2')
        })
    }     
})

scaleInfo.innerText = context.lineWidth
scaleMore.addEventListener('click', function(){
    context.lineWidth++
    scaleInfo.innerText = context.lineWidth
})
scaleLess.addEventListener('click', function(){
    context.lineWidth--
    scaleInfo.innerText = context.lineWidth   
})

remove.addEventListener('click', function(){
    context.strokeStyle = 'white'
    remove.style.border  = '5px solid white'
    pencil.style.border  = 'none'
})
pencil.addEventListener('click', function(){
    context.strokeStyle = 'black'
    remove.style.border  = 'none'
    pencil.style.border  = '5px solid white'
    for(let k = 0; k < collectionColors.length; k++){
        collectionColors[k].classList.remove('btnColor2')   
    }   
})
deleteAll.addEventListener('click', function(){
    context.clearRect(0, 0, canvas.width, canvas.height)
    remove.style.border  = 'none'
    pencil.style.border  = 'none'
    deleteAll.style.border  = '5px solid white'
})

window.addEventListener('load', function(){
    canvas.addEventListener('mousedown', function(){
        draw = true
    })
    canvas.addEventListener('mouseup', function(){
        draw = false
    })
    window.addEventListener('mousemove', function(e) {
        deleteAll.style.border = 'none' 
        pointX.innerText = e.pageX - canvas.offsetLeft
        pointY.innerText = e.pageY - canvas.offsetTop
        if(startX == null || startY == null || draw == false){
            startX = e.clientX
            startY = e.clientY
            return
        } 
        let currentX = e.clientX, currentY = e.clientY  
        context.beginPath()
        context.moveTo(startX, startY)
        context.lineTo(currentX, currentY)
        context.stroke()
        startX = currentX
        startY = currentY
    })
})























