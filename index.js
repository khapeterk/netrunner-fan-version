const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 1280
canvas.height = 720

let count = 0;

function animate() {
    window.requestAnimationFrame(animate)

    console.log(count)
    count++
}

animate()
