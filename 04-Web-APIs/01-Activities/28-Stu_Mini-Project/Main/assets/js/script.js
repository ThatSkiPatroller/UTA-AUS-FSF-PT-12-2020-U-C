//javascript code goes here

// Selecting html elements
let startButton = document.querySelector(".start-button");
let timerElement = document.querySelector(".timer-count");
let secondsLeft = 10;
// Start Button
startButton.addEventListener("click", function() {
    setTime();
});
    // call on setTime();

// Word bank ; parse these strings
let wordBank = ["Hello", "World"];
let wordRandom = [];
    for (i = 0; i < wordBank.length; i++){

};

// Point system
let wins = 0;
let losses = 0;

function pickWord () {

}

document.addEventListener("click")
// Reset button

// Timer ; add event listener - if timer runs out loss, etc.

function setTime(){
    // Sets interval in variable
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerElement.innerText = secondsLeft;
        if(secondsLeft === 0) {
        // Stops execution of action at set interval
         clearInterval(timerInterval);
         alert("game overrrrrrrrrr");
        // Calls function to create and append image
        } 
        
    }, 1000);
    };

// Return wins and losses
function init() {
    console.log("initialize");
};
init();