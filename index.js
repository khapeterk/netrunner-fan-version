let libraryY = 0
let maxLibraryCardsWidth = 0
let keys = {}

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
const cardDimensionsRef = {
    w: 250,
    h: 350,
    radius: 20,
}
let mousePosition
let midpointWidth, midpointHeight

function resizeCanvas() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    midpointWidth = canvas.width/2
    midpointHeight = canvas.height/2
}

function drawBackground() {
    context.fillStyle = "black"
    context.fillRect(0, 0, canvas.width, canvas.height)
}

function write(text, x, y, color, align) {
    context.font = "20px serif"
    context.textAlign = align ? align : "center"
    context.textBaseline = "middle"
    context.fillStyle = color
    context.fillText(text, x, y)
    const measure = context.measureText(text)
    return measure
}

resizeCanvas()

let currentLibraryCardPreview, currentDeckCardPreview
// const cards = []
const maxCards = Math.floor(canvas.width / 300)
for (let cardCount = 0; cardCount < maxCards; cardCount++) {
    const left = (canvas.width - (300 * maxCards - 50)) / 2
    // cards.push(new CardSprite(left + cardCount * 300, canvas.height / 3 * 2, "imgs/v1.0 Limited/CORP/aardvark.jpg"))
}

function animate() {
    window.requestAnimationFrame(animate)

    drawBackground()

    // cards.forEach(card => card.draw())

    // cards.forEach(card => drawRoundedRectangle("gray", card.position.x, canvas.height / 3, cardDimensionsRef.w, cardDimensionsRef.h, cardDimensionsRef.radius))


    if (cards) {
        let row = 0
        cards.forEach(card => {
            const cardNameWidth = write(card.Name, 20, 20 + row * 20 + libraryY, "gray", "left").width
            if (maxLibraryCardsWidth < cardNameWidth ) maxLibraryCardsWidth = cardNameWidth
            row++
        })
    }

    if (mousePosition) write("mousePosition: " + mousePosition.toString, canvas.width / 2, 10, "gray")
    write("windowWidth: " + canvas.width + ", windowHeight: " + canvas.height, canvas.width / 2, 30, "gray")
    write(maxCards + " cards", canvas.width / 2, 50, "gray")

    
}

animate()

window.addEventListener('resize', resizeCanvas)
canvas.addEventListener('mousedown', (event) => {
    keys.leftClick = true
})
canvas.addEventListener('mouseup', (event) => {
    keys.leftClick = false
})
canvas.addEventListener('mouseout', (event) => {
    keys.leftClick = false
})
canvas.addEventListener('wheel', event => {
    libraryY += (event.deltaY > 0 ? -1 : 1) * 100
    // event.deltaY < 0 is a scroll up
    // event.deltaY > 0 is a scroll down
    keepLibraryInBounds()
})
canvas.addEventListener('mousemove', (event) => {
    if (keys.leftClick) {
        libraryY += event.movementY
        keepLibraryInBounds()
    }
    var rect = canvas?.getBoundingClientRect()
    mousePosition = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        toString: (event.clientX - rect.left) + ", " + (event.clientY - rect.top)
    }
})

function keepLibraryInBounds() {
    const minLibraryY = -cards.length * 20 + canvas.height - 20
    const maxLibraryY = 0
    if (libraryY > maxLibraryY) libraryY = maxLibraryY
    if (libraryY < minLibraryY) libraryY = minLibraryY
}