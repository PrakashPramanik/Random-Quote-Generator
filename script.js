const text=document.getElementById("para");
const btn=document.getElementById('btn');
const author=document.getElementById("author");


async function randomQuote() {
    const response = await fetch('https://api.quotable.io/random')
    const quote = await response.json();

    text.innerText=quote.content;
    
    author.innerText=quote.author
  }

  btn.addEventListener('click',randomQuote);
  randomQuote()