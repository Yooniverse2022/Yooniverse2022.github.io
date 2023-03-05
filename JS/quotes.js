const quotes = [
    {
        quote: "It well becomes a young man to be modest",
        author: "Titus Maccius Plautus",
    },
    {
        quote: "If your morals make you dreary, depend on it, they are wrong",
        author: "Robert Louis Stevenson",       
    },
    {
        quote: "Gratitude is the most exquisite form of courtesy",
        author: "Jacques Maritain",       
    },
    {
        quote: "Gratitude is the most exquisite form of courtesy",
        author: "Jacques Maritain",       
    },
    {
        quote: "We must believe in luck. For how else can we explain the success of those we don't like?",
        author: "Jean Cocteau",       
    },
];

const quote = document.querySelector("#quote h3:first-child");
const author = document.querySelector("#quote h3:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = `by ${todaysQuote.author}`;