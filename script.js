let quotes = [];
const newQuoteBtn = document.querySelector("#new-quote");

const quoteText = document.querySelector("#quote");
const quoteAuthor = document.querySelector(".quote-author");

//New quotes on click btn

newQuoteBtn.addEventListener('click', newQuote)



//show new Quote
function newQuote () {
    const quote = quotes[Math.floor(Math.random() * quotes.length)]
    quoteText.innerHTML = quote.text;
    quoteAuthor.innerHTML = quote.author.split(',')[0];
    console.log(quoteText)
    console.log(quote)
}

// Get Quotes From API
async function getQuotes () {
    const apiUrl = 'https://type.fit/api/quotes';
    try{
        const res = await fetch(apiUrl);
        quotes = await res.json();
        newQuote();
    }   catch (e) {
    }
}

getQuotes();