function drawRoundedRectangle(color, x, y, w, h, radius) {
    context.strokeStyle = color
    context.beginPath()
    context.roundRect(x, y, w, h, [radius])
    context.stroke()
    context.fillStyle = color
    context.fill()
}

class Card {
    constructor() {
        this.position = {
            x: -1,
            y: -1,
        }
        this.cardDimensions = {
            w: 250,
            h: 350,
            radius: 20,
        }
    }

    changePostion({x, y}) {
        x = x === undefined ? this.position.x : x
        y = y === undefined ? this.position.y : y
        this.position = {x, y}
    }

    draw() {
        const {x,y} = this.position
        const {w,h,radius} = this.cardDimensions

        if (x === undefined || y == undefined) return
        
        drawRoundedRectangle("gray", x, y, w, h, radius)
    }
}