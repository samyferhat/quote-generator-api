// Concepts in the project: 
// - document.querySelector
// - Math Object 
// - addEventListener 
// - innerText

// Variables 

const quotes = [{
    "quote": "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "person": "Thomas Edison"
    }, {
    "quote": "You can observe a lot just by watching.",
    "person": "Yogi Berra"
    }, {
    "quote": "A house divided against itself cannot stand.",
    "person": "Abraham Lincoln"
    }, {
    "quote": "Difficulties increase the nearer we get to the goal.",
    "person": "Johann Wolfgang von Goethe"
    }, {
    "quote": "Fate is in your hands and no one elses",
    "person": "Byron Pulsifer"
    }, {
    "quote": "Be the chief but never the lord.",
    "person": "Lao Tzu"
    }, {
    "quote": "Nothing happens unless first we dream.",
    "person": "Carl Sandburg"
    }, {
    "quote": "Well begun is half done.",
    "person": "Aristotle"
    }, {
    "quote": "Life is a learning experience, only if you learn.",
    "person": "Yogi Berra"
    }, {
    "quote": "Self-complacency is fatal to progress.",
    "person": "Margaret Sangster"
    }, {
    "quote": "Peace comes from within. Do not seek it without.",
    "person": "Buddha"
    }, {
    "quote": "What you give is what you get.",
    "person": "Byron Pulsifer"
    }, {
    "quote": "We can only learn to love by loving.",
    "person": "Iris Murdoch"
    }, {
    "quote": "Life is change. Growth is optional. Choose wisely.",
    "person": "Karen Clark"
    }, {
    "quote": "You'll see it when you believe it.",
    "person": "Wayne Dyer"
    }, {
    "quote": "Today is the tomorrow we worried about yesterday.",
    "person": ""
    }, {
    "quote": "It's easier to see the mistakes on someone else's paper.",
    "person": ""
    }, {
    "quote": "Every man dies. Not every man really lives.",
    "person": ""
    }, {
    "quote": "To lead people walk behind them.",
    "person": "Lao Tzu"
    }, {
    "quote": "Having nothing, nothing can he lose.",
    "person": "William Shakespeare"
    }, {
    "quote": "Trouble is only opportunity in work clothes.",
    "person": "Henry J. Kaiser"
    }, {
    "quote": "A rolling stone gathers no moss.",
    "person": "Publilius Syrus"
    }, {
    "quote": "Ideas are the beginning points of all fortunes.",
    "person": "Napoleon Hill"
    }, {
    "quote": "Everything in life is luck.",
    "person": "Donald Trump"
    }, {
    "quote": "Doing nothing is better than being busy doing nothing.",
    "person": "Lao Tzu"
    }, {
    "quote": "Trust yourself. You know more than you think you do.",
    "person": "Benjamin Spock"
    }, {
    "quote": "Study the past, if you would divine the future.",
    "person": "Confucius"
    }, {
    "quote": "The day is already blessed, find peace within it.",
    "person": ""
    }, {
    "quote": "From error to error one discovers the entire truth.",
    "person": "Sigmund Freud"
    }, {
    "quote": "Well done is better than well said.",
    "person": "Benjamin Franklin"
    }, {
    "quote": "Bite off more than you can chew, then chew it.",
    "person": "Ella Williams"
    }];


let btn = document.querySelector('.new-quote'); 
let quote = document.querySelector('.quote'); 
let person = document.querySelector('.person');


btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length); 

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});

