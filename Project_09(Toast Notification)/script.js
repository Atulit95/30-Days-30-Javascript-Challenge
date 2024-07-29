let toastBox = document.getElementById('toast-box')
let Successmsg = '<span class="material-symbols-outlined" id="success">check_circle</span> Successfully Submitted'
let Errormsg = '<span class="material-symbols-outlined" id="error">priority_high</span> Please Fix the error!'
let Invalismsg = '<span class="material-symbols-outlined" id="Invalid">warning</span> Invalid input, check again'


function showToast(msg){
    let toast = document.createElement('div')
    toast.classList.add('toast')
    toast.innerHTML = msg
    toastBox.appendChild(toast)

    setTimeout(()=>{
        toast.remove('toast')
    },6000)
}