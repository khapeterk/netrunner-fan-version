const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
const fullWindow = window

let mousePosition
function resizeCanvas() {
    canvas.width = fullWindow.innerWidth
    canvas.height = fullWindow.innerHeight
}

function drawBackground() {
    context.fillStyle = "black"
    context.fillRect(0, 0, canvas.width, canvas.height)
}

function onCanvasMouseMove(event) {
    var rect = canvas.getBoundingClientRect();
    mousePosition = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        toString: (event.clientX - rect.left) + ", " + (event.clientY - rect.top)
    }
}

function write(text, x, y) {
    context.font = "48px serif";
    context.fillText(text, x, y);
}

const card = new Card()
card.changePostion({ x: 50, y: 100 })

function animate() {
    window.requestAnimationFrame(animate)

    drawBackground()
    card.draw()
    if (mousePosition) write(mousePosition.toString, canvas.width / 2, canvas.height / 2)
    write(canvas.width + ", " + canvas.height, canvas.width / 2, canvas.height / 3)
}

animate()
resizeCanvas()

window.addEventListener('resize', resizeCanvas);