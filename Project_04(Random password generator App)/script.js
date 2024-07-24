const passwordBox = document.getElementById("password")
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWZYZ"
const loweCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "!@#$%^&*()_+-=|\?><{}[]~"

const allchar = upperCase + loweCase + number + symbol; 

function createPassword(){
    let password = "";
    while(length > password.length){
        password += allchar[Math.floor(Math.random() * allchar.length)];
    }
    passwordBox.value = password
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy")
}