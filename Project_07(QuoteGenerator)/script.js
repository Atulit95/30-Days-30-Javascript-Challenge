const quote = document.getElementById("quote")
const author = document.getElementById("author")
const url = 'https://random-quote-generator2.p.rapidapi.com/randomQuote';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'your api key',
		'x-rapidapi-host': 'random-quote-generator2.p.rapidapi.com'
	}
};
fetch(url, options)
.then(response => response.json())
.then(response => {
    quote.innerHTML = response[0].Quote
    author.innerHTML = response[0].Author
})
.catch(err => console.error(err));

function newQuote(){
    fetch(url, options)
    .then(response => response.json())
    .then(response => {
        quote.innerHTML = response[0].Quote
        author.innerHTML = response[0].Author
    })
    .catch(err => console.error(err));
    }

function Tweet(){
    window.open("https://twitter.com/intent/tweet?text=hjhh", "Tweet Window", "width=600, height=300")
}