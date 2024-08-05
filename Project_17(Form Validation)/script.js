let nameError = document.getElementById("name-error")
let phoneError = document.getElementById("phone-error")
let emailError = document.getElementById("email-error")
let msgError = document.getElementById("msg-error")
let submiitError = document.getElementById("submit-error")

function validateNmae(){
    let name = document.getElementById("contact-name").value
    if(name.length == 0){
        nameError.innerHTML = "Name is required"
        return false
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write Full name"
        return false
    }
    nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
    return true
}

function validatePhone(){
    let phone = document.getElementById("contact-phone").value
    if(phone.length == 0){
        phoneError.innerHTML = "Phone No. is required"
        return false
    }
    if(phone.length !== 10){
        phoneError.innerHTML = "Phone No. should 10 digit."
        return false
    }
    if(!phone.match(/^[0-9]{10}$/)){
        msgError.innerHTML = "Only digits"
        return false
    }
    phoneError.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
    return true
}

function validateEmail(){
    let email = document.getElementById("contact-email").value
    if(email.length == 0){
        emailError.innerHTML = "Email is required"
        return false
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Invalid Email"
        return false
    }
    emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
    return true
}

function validateMsg(){
    let msg = document.getElementById("contact-msg").value
    let required = 30
    var left = required - msg.length
    if(left > 0){
        msgError.innerHTML = left + "more characters is required"
        return false
    }
    msgError.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
    return true
}

function validateForm(){
    if(!validateNmae() || !validatePhone() || !validateEmail() || !validateMsg()){
        submiitError.style.display = "block";
        submiitError.innerHTML = 'Please fix errors to submit'
        setTimeout(function(){submiitError.style.display = 'none'},3000)
        return false
    }
}