const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 1280
canvas.height = 720

function drawBackground() {
    context.fillStyle = "black"
    context.fillRect(0, 0, canvas.width, canvas.height)
}

let count = 0;

const card = new Card()
card.changePostion({x: 50, y: 100})

function animate() {
    window.requestAnimationFrame(animate)

    drawBackground()
    card.draw()
    
    console.log(count)
    count++
}

animate()
