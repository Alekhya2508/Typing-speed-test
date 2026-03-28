let beginner = [
{ text: "The sun rises in the east.", level: "Beginner 🟢" },
{ text: "I like to drink coffee.", level: "Beginner 🟢" },
{ text: "Typing is a useful skill.", level: "Beginner 🟢" },
{ text: "Cats like to sleep a lot.", level: "Beginner 🟢" },
{ text: "Practice typing every day.", level: "Beginner 🟢" },
{ text: "Reading books is a good habit.", level: "Beginner 🟢" },
{ text: "The sky is blue today.", level: "Beginner 🟢" },
{ text: "I enjoy learning new things.", level: "Beginner 🟢" },
{ text: "Keep your fingers on the keys.", level: "Beginner 🟢" },
{ text: "Small steps lead to big success.", level: "Beginner 🟢" }
];

let medium = [
{ text: "Typing quickly and accurately takes regular practice.", level: "Medium 🟡" },
{ text: "Learning to type without looking at the keyboard improves speed.", level: "Medium 🟡" },
{ text: "Consistency and patience are important for success.", level: "Medium 🟡" },
{ text: "Technology helps us solve many problems in daily life.", level: "Medium 🟡" },
{ text: "A positive mindset can help you achieve your goals.", level: "Medium 🟡" },
{ text: "Every expert was once a beginner who never gave up.", level: "Medium 🟡" },
{ text: "Building good habits makes learning easier and faster.", level: "Medium 🟡" },
{ text: "The internet provides access to a huge amount of knowledge.", level: "Medium 🟡" },
{ text: "Success comes from discipline and hard work.", level: "Medium 🟡" },
{ text: "Improving typing skills can save a lot of time.", level: "Medium 🟡" }
];

let hard = [
{ text: "Programming requires patience, logical thinking, and continuous practice.", level: "Hard 🔴" },
{ text: "Fast typing skills help programmers write and debug code more efficiently.", level: "Hard 🔴" },
{ text: "Success usually comes to those who are too busy to be looking for it.", level: "Hard 🔴" },
{ text: "The quick brown fox jumps over the lazy dog near the quiet river bank.", level: "Hard 🔴" },
{ text: "Artificial intelligence is transforming the way humans interact with technology.", level: "Hard 🔴" },
{ text: "Developing strong problem solving skills is essential for every programmer.", level: "Hard 🔴" },
{ text: "Learning something new every day keeps the brain active and creative.", level: "Hard 🔴" },
{ text: "Hard work, determination, and dedication are the keys to long term success.", level: "Hard 🔴" },
{ text: "The future belongs to those who believe in the beauty of their dreams.", level: "Hard 🔴" },
{ text: "Practicing typing regularly improves both speed and accuracy over time.", level: "Hard 🔴" }
];

let quotes = [...beginner, ...medium, ...hard];

let quote = document.getElementById("quote");
let levelBox = document.getElementById("level");
let input = document.getElementById("input");
let okBtn = document.getElementById("okBtn");

let wpm = document.getElementById("wpm");
let accuracy = document.getElementById("accuracy");
let mistakes = document.getElementById("mistakes");

let resultSection = document.getElementById("resultSection");

let startTime;
let currentQuote = "";

/* Load Sentence */

function loadQuote(){

let random = Math.floor(Math.random()*quotes.length);

currentQuote = quotes[random].text;

quote.innerText = currentQuote;

levelBox.innerText = quotes[random].level;

startTime = new Date().getTime();

}

loadQuote();

/* OK Button */

okBtn.addEventListener("click", showResult);

/* Enter Key */

input.addEventListener("keypress", function(e){

if(e.key === "Enter"){
e.preventDefault();
showResult();
}

});

/* Show Result */

function showResult(){

let typedText = input.value;

let endTime = new Date().getTime();

let timeTaken = (endTime - startTime)/1000;

let error = 0;

for(let i=0;i<currentQuote.length;i++){

if(typedText[i] !== currentQuote[i]){
error++;
}

}

mistakes.innerText = error;

let correct = currentQuote.length - error;

let acc = (correct/currentQuote.length)*100;

accuracy.innerText = acc.toFixed(0) + "%";

let words = typedText.trim().split(" ").length;

let speed = Math.round((words/timeTaken)*60);

wpm.innerText = speed + " WPM";

resultSection.style.display = "block";

input.disabled = true;

}

/* Try Again */

function tryAgain(){

input.disabled = false;

input.value = "";

resultSection.style.display = "none";

startTime = new Date().getTime();

}

/* Next Sentence */

function nextSentence(){

input.disabled = false;

input.value = "";

resultSection.style.display = "none";

loadQuote();

}
