var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var words = poem.split(" ");

var mainEl = document.getElementById("main");
var timerEl = document.getElementById("countdown");
var bodyEl = document.createElement("div");

var i = 0;

var millisecondsPerWord = prompt("How many milliseconds between words would you like?");

function prepareRead() {
  var timeLeft = 5;

  var timeInterval = setInterval(function() {
    timerEl.textContent = timeLeft + " seconds remaining";
    timeLeft--;

    if (timeLeft === 0) {
      timerEl.textContent = "";
      speedRead();
      clearInterval(timeInterval);
    }

  }, 1000);
}

function speedRead() {
  //append mainEl div
  mainEl.appendChild(bodyEl);
  // /set interval in a variable
  var poemInterval = setInterval (
    function() {
      if (words[i] === undefined) {
        //clear interval if no more words remain
        clearInterval(poemInterval);
      } else {
        // Add current word as text content of mainEl div
        mainEl.textContent = word[i];
        // Increment - i
        i++;
      }
  )
};
  //Add Your Code Here
  // millisecondsPerWord.textContent = "";
  // bodyEl.appendChild(poem);
   

prepareRead();