let imgwrap = document.querySelector(".img-wrap")
let imgbox = document.querySelector(".img-box")
let originalImg = document.querySelector("#originalImg")
let line = document.querySelector("#line")


originalImg.style.width = imgbox.offsetWidth + "px"

let leftSpace = imgbox.offsetLeft

imgbox.onmousemove = function(e){
    let boxWidth = (e.pageX - leftSpace) + "px";
    imgwrap.style.width = boxWidth
    line.style.left = boxWidth
}