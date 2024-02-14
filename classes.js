function drawRoundedRectangleFilled(color, x, y, w, h, radius) {
    context.strokeStyle = color
    context.beginPath()
    context.roundRect(x, y, w, h, [radius])
    context.stroke()
    context.fillStyle = color
    context.fill()
}

function drawRoundedRectangle(color, x, y, w, h, radius) {
    context.strokeStyle = color
    context.beginPath()
    context.roundRect(x, y, w, h, [radius])
    context.stroke()
    context.fillStyle = color
}

class Card {
    constructor(x, y) {
        this.position = {
            x,
            y,
        }
        this.cardDimensions = {
            w: 250,
            h: 350,
            radius: 20,
        }
    }

    draw() {
        const { x, y } = this.position
        const { w, h, radius } = this.cardDimensions

        if (x === undefined || y == undefined) return

        drawRoundedRectangleFilled("gray", x, y, w, h, radius)
    }
}