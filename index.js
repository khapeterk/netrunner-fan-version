const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 1280
canvas.height = 720

function drawBackground() {
    context.fillStyle = "black"
    context.fillRect(0, 0, canvas.width, canvas.height)
}

function drawRoundedRectangle({x,y,w,h,radius}) {
    context.strokeStyle = "gray"
    context.beginPath()
    context.roundRect(x, y, w, h, [radius])
    context.stroke()
    context.fillStyle = "gray"
    context.fill()
}

let count = 0;

function animate() {
    window.requestAnimationFrame(animate)

    drawBackground()
    drawRoundedRectangle({x:10,y:10,w:250,h:350,radius:20})

    console.log(count)
    count++
}

animate()
