const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 1280
canvas.height = 720

function drawBackground() {
    context.fillStyle = "black"
    context.fillRect(0, 0, canvas.width, canvas.height)
}

let count = 0;

function animate() {
    window.requestAnimationFrame(animate)

    drawBackground()

    console.log(count)
    count++
}

animate()
