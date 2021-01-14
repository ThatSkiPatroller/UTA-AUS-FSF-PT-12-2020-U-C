var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add event listener to increment button
//console.log("here");
incrementEl.addEventListener("click", function() {
  count++
  setCounterText();
});

decrementE1.addEventListener("click", function (){
  if (count >=0) {
  COUNT -= 1;
  }
});

console.log();
// TODO: Add event listener to decrement button 
