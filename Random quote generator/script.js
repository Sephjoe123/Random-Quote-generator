let btn = document.getElementById("btn");
let quoteText = document.getElementById("quote-text");
let cite = document.getElementById("cite");

let generateQuote = [

    {
        Quote: "Be the change that you wish to see in the world.",
        Author: "Mahatma Gandhi"
    },

    {
        Quote: "You miss 100% of the shots you don't take." ,
        Author: "Wayne Gretzky" 
    },
    {
        Quote: "The only way to do great work is to love what you do.",
        Author: "Steve Jobs" 
    },
    {
        Quote: "I have not failed. I've just found 10,000 ways that won't work.",
        Author: "Thomas Edison" 
    },
    {
        Quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        Author: "Winston Churchill" 
    },
    {
        Quote: "The only true wisdom is in knowing you know nothing.",
        Author: "Socrates" 
    },
    {
        Quote: "Believe you can and you're halfway there." ,
        Author: "Theodore Roosevelt" 
    },
    {
        Quote: "The best way to predict your future is to create it.",
        Author: "Abraham Lincoln" 
    },

]

function randomQuote(){
    let index;
    index = Math.floor(Math.random() * generateQuote.length)
    let newText = generateQuote[index].Quote;
    quoteText.innerHTML = newText;
    cite.innerHTML = generateQuote[index].Author;


}


btn.addEventListener("click",randomQuote);

