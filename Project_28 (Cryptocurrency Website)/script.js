const bitcoin = document.getElementById("bitcoin")
const ethereum = document.getElementById("ethereum")
const dogecoin = document.getElementById("dogecoin")

const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'x-cg-demo-api-key': 'your-API-key'}
  };
  
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd', options)
.then(response => response.json())
.then(response => {
    bitcoin.innerHTML = "$" + response.bitcoin.usd
    ethereum.innerHTML = "$" + response.ethereum.usd
    dogecoin.innerHTML = "$" + response.dogecoin.usd
})
.catch(err => console.error(err));