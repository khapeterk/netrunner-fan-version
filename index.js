let maxLibraryCardsWidth = 0
const keys = {}
const textSize = 20
let cardListIndex = 0

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
    midpointWidth = canvas.width / 2
    midpointHeight = canvas.height / 2
}

function drawBackground() {
    context.fillStyle = "black"
    context.fillRect(0, 0, canvas.width, canvas.height)
}

function write(text, x, y, color, align) {
    context.font = textSize + "px serif"
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
        const heightInCardNames = Math.floor(canvas.height / textSize)
        for (let index = 0; index < heightInCardNames; index++) {
            const cardNameWidth = write(cardListIndex + index + " " + cards[cardListIndex + index].Name, textSize, textSize + index * textSize, "gray", "left").width
            if (maxLibraryCardsWidth < cardNameWidth) maxLibraryCardsWidth = cardNameWidth
        }
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
    cardListIndex += (event.deltaY < 0 ? -3 : 3)
    keepLibraryInBounds()
})
canvas.addEventListener('mousemove', (event) => {
    if (keys.leftClick) {
        cardListIndex += (event.movementY > 0 ? -1 : 1)
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
    const heightInCardNames = Math.floor(canvas.height / textSize)
    const minLibraryY = 0
    const maxLibraryY = cards.length - heightInCardNames

    if (cardListIndex > maxLibraryY) cardListIndex = maxLibraryY
    if (cardListIndex < minLibraryY) cardListIndex = minLibraryY
}