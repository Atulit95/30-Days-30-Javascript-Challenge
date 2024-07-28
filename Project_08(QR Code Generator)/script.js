const api_url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='

let imgBox = document.getElementById("imgBox")
let QRimg = document.getElementById("QRimg")
let QRText = document.getElementById("qrText")

function GenerateQR(){
   if(QRText.value.length > 0){
        QRimg.src = api_url + QRText.value
        imgBox.classList.add("show-img")
   }else{
    QRText.classList.add("error");
    setTimeout(()=>{
        QRText.classList.remove('error')
    },1000);
   }
}

