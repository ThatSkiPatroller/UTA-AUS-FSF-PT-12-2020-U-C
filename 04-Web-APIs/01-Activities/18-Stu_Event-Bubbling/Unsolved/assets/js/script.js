// TODO: Which element is the following line of code selecting?
// .carouselbox inside of the document
var carousel = document.querySelector(".carouselbox");
// TODO: Which element is the following line of code selecting?
// .next indside of carousel
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
// This event listener opens the current picture on screen
carousel.addEventListener("click", function() {
  //open a new window when clicked is what following code does
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
// Changing index to the next phto
next.addEventListener("click", function(event) {
  // TODO: What is the purpose of the following line of code?
  // Keeps from other events occurring; keeps this function within itself
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
// Changes index to the previous
prev.addEventListener("click", function(event) {
    // TODO: What would happen if we didn't add the following line of code?
    // Propogates everything even outside of this function
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
