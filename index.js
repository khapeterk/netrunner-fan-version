const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
const cardDimensionsRef = {
    w: 250,
    h: 350,
    radius: 20,
}

let mousePosition
function resizeCanvas() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
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
    context.font = "20px serif";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(text, x, y);
}

resizeCanvas()

const cards = []
const maxCards = Math.floor(canvas.width / 300)
for (let cardCount = 0; cardCount < maxCards; cardCount++) {
    const left = (canvas.width - (300 * maxCards - 50)) / 2
    cards.push(new Card(left + cardCount * 300, canvas.height / 3 * 2))
}

function animate() {
    window.requestAnimationFrame(animate)

    drawBackground()
    cards.forEach(card => card.draw())
    cards.forEach(card => drawRoundedRectangle("gray", card.position.x, canvas.height / 3, cardDimensionsRef.w, cardDimensionsRef.h, cardDimensionsRef.radius))

    if (mousePosition) write("mousePosition: " + mousePosition.toString, canvas.width / 2, 10)
    write("windowWidth: " + canvas.width + ", windowHeight: " + canvas.height, canvas.width / 2, 30)
    write(maxCards + " cards", canvas.width / 2, 50)
}

animate()

window.addEventListener('resize', resizeCanvas);