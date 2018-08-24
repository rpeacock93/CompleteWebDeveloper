
let start = new Date().getTime()
let best = 20
let clickTime = 0

function appearAfterDelay() {
    setTimeout(changeShape, 1000)
}

appearAfterDelay()

document.getElementById("shape").onclick = function() {
    document.getElementById("shape").style.display = "none"
    let end = new Date().getTime()
    clickTime = ((end - start) / 1000)
    document.getElementById('message').innerHTML = "Your time: " + clickTime + "s"
    if (clickTime < best) {
        best = clickTime
        document.getElementById('best').innerHTML = "Best Time: " + best + "s"
    }
    appearAfterDelay()
}


let colorList = ["#E6DB74","#AE81FF","#F92672","#66D9EF","#A6E22E","#FD971F","#F8F8F0"] // 7
let shapeList = ["50%","25%","100%","0","75%"] // 5

function changeShape() {
    document.getElementById("shape").style.display = "block"
    let color = colorList[Math.floor(Math.random() * 7)]
    let shape = shapeList[Math.floor(Math.random() * 5)]
    let size = Math.floor(Math.random() * 500) + 1
    let top = (Math.floor(Math.random() * 300) + 1)
    let bottom = (Math.floor(Math.random() * 300) + 1)
    let left = (Math.floor(Math.random() * 300) + 1)
    let right = (Math.floor(Math.random() * 300) + 1)

    document.getElementById('shape').style.width = size + "px"
    document.getElementById('shape').style.height = size + "px"
    document.getElementById('shape').style.top = top + "px"
    document.getElementById('shape').style.left = left + "px"
    document.getElementById('shape').style.right = right + "px"
    document.getElementById('shape').style.bottom = bottom + "px"
    document.getElementById('shape').style.backgroundColor = color
    document.getElementById('shape').style.borderRadius = shape
    start = new Date().getTime()

}