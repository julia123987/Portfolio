
let btnStart = document.getElementById('btnStart')
let mainPart = document.getElementById('mainPart')
let borderRadius = document.getElementById('borderRadius')
let backgroundColor = document.getElementById('backgroundColor')
let boxShadow = document.getElementById('boxShadow')
let fontSize = document.getElementById('fontSize')
let radius = document.getElementById('radius')
let borderTopLeft = document.getElementById('borderTopLeft')
let borderTopRight = document.getElementById('borderTopRight')
let borderBottomLeft = document.getElementById('borderBottomLeft')
let borderBottomRight = document.getElementById('borderBottomRight')
let r = document.getElementById('r')
let g = document.getElementById('g')
let b = document.getElementById('b')
let a = document.getElementById('a')
let x = document.getElementById('x')
let y = document.getElementById('y')
let blurR = document.getElementById('blurR')
let spreadR = document.getElementById('spreadR')
let r2 = document.getElementById('r2')
let g2 = document.getElementById('g2')
let b2 = document.getElementById('b2')
let a2 = document.getElementById('a2')
let sizeF = document.getElementById('sizeF')
let weightF = document.getElementById('weightF')
let fontFam = document.getElementById('fontFam')
let fontSt = document.getElementById('fontSt')
let textDec = document.getElementById('textDec')
let square = document.getElementById('square')
let codeCopy = document.getElementById('codeCopy')
let btnCopy = document.getElementById('copy')
let square2 = document.getElementById('square2')
let codeCopy2 = document.getElementById('codeCopy2')
let btnCopy2 = document.getElementById('copy2')
let square3 = document.getElementById('square3')
let codeCopy3 = document.getElementById('codeCopy3')
let btnCopy3 = document.getElementById('copy3')
let square4 = document.getElementById('square4')
let codeCopy4 = document.getElementById('codeCopy4')
let btnCopy4 = document.getElementById('copy4')
let textEx = document.getElementById('textEx')
let i = 1
btnStart.addEventListener('click', function(){
    mainPart.style.visibility = 'visible';
    if(i%2 != 0) btnStart.value = `CLOSE`
    if(i%2 == 0) {
        btnStart.value = `START` 
        brPart.style.display = "none"
        bcPart.style.display = "none"
        bshPart.style.display = "none"
        fontPart.style.display = "none"
    }
    i++
})
borderRadius.addEventListener('click', function () {
    i++
    btnStart.value = `CLOSE`
    brPart.style.display = "flex"
    bcPart.style.display = "none"
    bshPart.style.display = "none"
    fontPart.style.display = "none"
})
backgroundColor.addEventListener('click', function(){
    i++
    btnStart.value = `CLOSE`
    bcPart.style.display = "flex"
    brPart.style.display = "none"
    bshPart.style.display = "none"
    fontPart.style.display = "none"
})
boxShadow.addEventListener('click', function(){
    i++
    btnStart.value = `CLOSE`
    bcPart.style.display = "none"
    brPart.style.display = "none"
    bshPart.style.display = "flex"
    fontPart.style.display = "none"
})
fontSize.addEventListener('click', function(){
    i++
    btnStart.value = `CLOSE`
    bcPart.style.display = "none"
    brPart.style.display = "none"
    bshPart.style.display = "none"
    fontPart.style.display = "flex"
})
radius.addEventListener('input', function(){
    square.style.borderRadius = `${radius.value}px`
    codeCopy.innerHTML = `border-radius: ${radius.value}px; \nborder-top-left-radius: ${borderTopLeft.value}px; \nborder-top-right-radius: ${borderTopRight.value}px; \nborder-bottom-left-radius: ${borderBottomLeft.value}px; \nborder-bottom-right-radius: ${borderBottomRight.value}px;`
})
borderTopLeft.addEventListener('input', function(){
    square.style.borderTopLeftRadius = `${borderTopLeft.value}px`
    codeCopy.innerHTML = `border-radius: ${radius.value}px; \nborder-top-left-radius: ${borderTopLeft.value}px; \nborder-top-right-radius: ${borderTopRight.value}px; \nborder-bottom-left-radius: ${borderBottomLeft.value}px; \nborder-bottom-right-radius: ${borderBottomRight.value}px;`
})
borderTopRight.addEventListener('input', function(){
    square.style.borderTopRightRadius = `${borderTopRight.value}px`
    codeCopy.innerHTML = `border-radius: ${radius.value}px; \nborder-top-left-radius: ${borderTopLeft.value}px; \nborder-top-right-radius: ${borderTopRight.value}px; \nborder-bottom-left-radius: ${borderBottomLeft.value}px; \nborder-bottom-right-radius: ${borderBottomRight.value}px;`
})
borderBottomLeft.addEventListener('input', function(){
    square.style.borderBottomLeftRadius = `${borderBottomLeft.value}px`
    codeCopy.innerHTML = `border-radius: ${radius.value}px; \nborder-top-left-radius: ${borderTopLeft.value}px; \nborder-top-right-radius: ${borderTopRight.value}px; \nborder-bottom-left-radius: ${borderBottomLeft.value}px; \nborder-bottom-right-radius: ${borderBottomRight.value}px;`
})
borderBottomRight.addEventListener('input', function(){
    square.style.borderBottomRightRadius = `${borderBottomRight.value}px`
    codeCopy.innerHTML = `border-radius: ${radius.value}px; \nborder-top-left-radius: ${borderTopLeft.value}px; \nborder-top-right-radius: ${borderTopRight.value}px; \nborder-bottom-left-radius: ${borderBottomLeft.value}px; \nborder-bottom-right-radius: ${borderBottomRight.value}px;`
})
btnCopy.addEventListener('click', function(){
    codeCopy.focus()
    codeCopy.select()
    document.execCommand("copy")
})
r.addEventListener('input', function(){
    square2.style.backgroundColor = `rgb(${r.value} ${g.value} ${b.value})`
    codeCopy2.innerHTML = `background-color: rgb(${r.value}, ${g.value}, ${b.value}); \nopacity: ${a.value};`
    console.log(r.value, g.value, b.value)
})
g.addEventListener('input', function(){
    square2.style.backgroundColor = `rgb(${r.value} ${g.value} ${b.value})`
    codeCopy2.innerHTML = `background-color: rgb(${r.value}, ${g.value}, ${b.value}); \nopacity: ${a.value};`
    console.log(r.value, g.value, b.value)
})
b.addEventListener('input', function(){
    square2.style.backgroundColor = `rgb(${r.value} ${g.value} ${b.value})`
    codeCopy2.innerHTML = `background-color: rgb(${r.value}, ${g.value}, ${b.value}); \nopacity: ${a.value};`
})
a.addEventListener('input', function(){
    square2.style.opacity = `${a.value}`
    codeCopy2.innerHTML = `background-color: rgb(${r.value}, ${g.value}, ${b.value}); \nopacity: ${a.value};`
})
btnCopy2.addEventListener('click', function(){
    codeCopy2.focus()
    codeCopy2.select()
    document.execCommand("copy")
})
x.addEventListener('input', function(){
    square3.style.boxShadow = `${x.value}px ${y.value}px ${blurR.value}px ${spreadR.value}px rgba(${r2.value}, ${g2.value}, ${b2.value}, ${a2.value})`
    codeCopy3.innerHTML = `box-shadow: ${x.value}px ${y.value}px ${blurR.value}px ${spreadR.value}px rgba(${r2.value}, ${g2.value}, ${b2.value}, ${a2.value});`
})
y.addEventListener('input', function(){
    square3.style.boxShadow = `${x.value}px ${y.value}px ${blurR.value}px ${spreadR.value}px rgba(${r2.value}, ${g2.value}, ${b2.value}, ${a2.value})`
    codeCopy3.innerHTML = `box-shadow: ${x.value}px ${y.value}px ${blurR.value}px ${spreadR.value}px rgba(${r2.value}, ${g2.value}, ${b2.value}, ${a2.value});`
})
blurR.addEventListener('input', function(){
    square3.style.boxShadow = `${x.value}px ${y.value}px ${blurR.value}px ${spreadR.value}px rgba(${r2.value}, ${g2.value}, ${b2.value}, ${a2.value})`
    codeCopy3.innerHTML = `box-shadow: ${x.value}px ${y.value}px ${blurR.value}px ${spreadR.value}px rgba(${r2.value}, ${g2.value}, ${b2.value}, ${a2.value});`
})
spreadR.addEventListener('input', function(){
    square3.style.boxShadow = `${x.value}px ${y.value}px ${blurR.value}px ${spreadR.value}px rgba(${r2.value}, ${g2.value}, ${b2.value}, ${a2.value})`
    codeCopy3.innerHTML = `box-shadow: ${x.value}px ${y.value}px ${blurR.value}px ${spreadR.value}px rgba(${r2.value}, ${g2.value}, ${b2.value}, ${a2.value});`
})
r2.addEventListener('input', function(){
    square3.style.boxShadow = `${x.value}px ${y.value}px ${blurR.value}px ${spreadR.value}px rgba(${r2.value}, ${g2.value}, ${b2.value}, ${a2.value})`
    codeCopy3.innerHTML = `box-shadow: ${x.value}px ${y.value}px ${blurR.value}px ${spreadR.value}px rgba(${r2.value}, ${g2.value}, ${b2.value}, ${a2.value});`
})
g2.addEventListener('input', function(){
    square3.style.boxShadow = `${x.value}px ${y.value}px ${blurR.value}px ${spreadR.value}px rgba(${r2.value}, ${g2.value}, ${b2.value}, ${a2.value})`
    codeCopy3.innerHTML = `box-shadow: ${x.value}px ${y.value}px ${blurR.value}px ${spreadR.value}px rgba(${r2.value}, ${g2.value}, ${b2.value}, ${a2.value});`
})
b2.addEventListener('input', function(){
    square3.style.boxShadow = `${x.value}px ${y.value}px ${blurR.value}px ${spreadR.value}px rgba(${r2.value}, ${g2.value}, ${b2.value}, ${a2.value})`
    codeCopy3.innerHTML = `box-shadow: ${x.value}px ${y.value}px ${blurR.value}px ${spreadR.value}px rgba(${r2.value}, ${g2.value}, ${b2.value}, ${a2.value});`
})
a2.addEventListener('input', function(){
    square3.style.boxShadow = `${x.value}px ${y.value}px ${blurR.value}px ${spreadR.value}px rgba(${r2.value}, ${g2.value}, ${b2.value}, ${a2.value})`
    codeCopy3.innerHTML = `box-shadow: ${x.value}px ${y.value}px ${blurR.value}px ${spreadR.value}px rgba(${r2.value}, ${g2.value}, ${b2.value}, ${a2.value});`
})
btnCopy3.addEventListener('click', function(){
    codeCopy3.focus()
    codeCopy3.select()
    document.execCommand("copy")
})
sizeF.addEventListener('input', function(){
    textEx.style.fontSize = `${sizeF.value}px`
    codeCopy4.innerHTML = `font-size: ${sizeF.value}px; \nfont-weight: ${weightF.value}; \nfont-family: ${fontFam.value}; \nfont-style: ${fontSt.value}; \ntext-decoration: ${textDec.value};`
})
weightF.addEventListener('input', function(){
    textEx.style.fontWeight = `${weightF.value}`
    codeCopy4.innerHTML = `font-size: ${sizeF.value}px; \nfont-weight: ${weightF.value}; \nfont-family: ${fontFam.value}; \nfont-style: ${fontSt.value}; \ntext-decoration: ${textDec.value};`
})
fontFam.addEventListener('click', function(){
    textEx.style.fontFamily = `${fontFam.value}`
    codeCopy4.innerHTML = `font-size: ${sizeF.value}px; \nfont-weight: ${weightF.value}; \nfont-family: ${fontFam.value}; \nfont-style: ${fontSt.value}; \ntext-decoration: ${textDec.value};`
})
fontSt.addEventListener('click', function(){
    textEx.style.fontStyle = `${fontSt.value}`
    codeCopy4.innerHTML = `font-size: ${sizeF.value}px; \nfont-weight: ${weightF.value}; \nfont-family: ${fontFam.value}; \nfont-style: ${fontSt.value}; \ntext-decoration: ${textDec.value};`
})
textDec.addEventListener('click', function(){
    textEx.style.textDecoration = `${textDec.value}`
    codeCopy4.innerHTML = `font-size: ${sizeF.value}px; \nfont-weight: ${weightF.value}; \nfont-family: ${fontFam.value}; \nfont-style: ${fontSt.value}; \ntext-decoration: ${textDec.value};`
})
btnCopy4.addEventListener('click', function(){
    codeCopy4.focus()
    codeCopy4.select()
    document.execCommand("copy")
})





