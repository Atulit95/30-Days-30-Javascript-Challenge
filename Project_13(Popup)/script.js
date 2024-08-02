let popup =document.getElementById("popup")

function openPopup(){
    popup.classList.add("open-popup")
    popup.classList.remove("close-popup")
}

function closePopup(){
    popup.classList.add("close-popup")
    popup.classList.remove("open-popup")
}