var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  if (element.matches(".box")) {
    var state = element.getAttribute("data-state");
    var state2 = element.dataset.state;
    console.log('state: ', state, ' state2: ', state2);

    if (state === "hidden") {
      element.dataset.state = "visible";
      element.textContent = element.dataset.number;
    } else {
      element.dataset.state = "hidden";
      element.textContent = "";
  }
}
  // TODO: Complete function
});
