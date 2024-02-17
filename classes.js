
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

function imgFromSrc(src) {
    const img = new Image()
    img.src = src
    return img
}

class Card {
    constructor({Name, set, baseStat, breakStr, cost, player, type, rarity, keywords}) {
        this.name = Name
        this.Set = set
        this.baseStat = baseStat
        this.breakStr = breakStr
        this.cost = cost
        this.player = player
        this.type = type
        this.rarity = rarity
        this.keywords = keywords
        console.log(this)
    }
}

class CardSprite {
    constructor(x, y, imgPath) {
        this.position = {
            x,
            y,
        }
        this.cardDimensions = {
            w: 250,
            h: 350,
            radius: 20,
        }
        this.img = imgFromSrc(imgPath)
    }

    draw() {
        const { x, y } = this.position
        const { w, h, radius } = this.cardDimensions

        if (x === undefined || y == undefined) return

        // drawRoundedRectangleFilled("gray", x, y, w, h, radius)
        context.drawImage(
            this.img,
            x, y, w, h,
            // spritePositionX, spritePositionY, this.spriteWidth * this.scale, this.spriteHeight * this.scale
        )
    }
}