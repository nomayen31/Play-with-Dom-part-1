const quotes = [
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        person: "Winston Churchill"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        person: "Steve Jobs"
    },

    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        person: "Robert Frost"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        person: "John Lennon"
    },
    {
        quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
        person: "Chinese Proverb"
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        person: "Franklin D. Roosevelt"
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        person: "Ralph Waldo Emerson"
    },
    {
        quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",

        person: "Martin Luther King Jr."
    },
    {
        quote: "You miss 100% of the shots you don't take.",

        person: "Wayne Gretzky"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        person: "Eleanor Roosevelt"
    }
];  


document.querySelector('#quote').addEventListener('click', function () {
    const p = document.getElementById('quote-p');
    const name = document.getElementById('name');
    // console.log(p);

    const randomQuote = Math.floor(Math.random() * quotes.length);

    // console.log(quotes[randomQuote].quote);
    // console.log(quotes[randomQuote].person);

    p.innerText = quotes[randomQuote].quote;
    name.innerText = quotes[randomQuote].person;
})