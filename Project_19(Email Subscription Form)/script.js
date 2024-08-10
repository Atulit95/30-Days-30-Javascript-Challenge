const scriptURL = '<your script URl>'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Thank You for Subscribing!"
        setTimeout(()=>{
            msg.innerHTML = ""
        },5000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})
