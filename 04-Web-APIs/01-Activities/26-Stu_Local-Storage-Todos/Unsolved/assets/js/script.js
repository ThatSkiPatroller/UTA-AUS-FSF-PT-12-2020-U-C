var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// TODO: What is the purpose of this function?
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.
  // clears out list everytime and re-adds todos incase anything has changed
  todoList.innerHTML = "";
  // array length recorderd / number of items inputted tracked
  todoCountSpan.textContent = todos.length;
  
  // TODO: Describe the functionality of the following `for` loop.
  // Loops through items and adds complete button
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    //makes todos like an i index
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function?
// the purpose of this function is to render the save Todos and render them in the list
//happends first, if not null going to set them to todos
function init() {
  // TODO: What is the purpose of the following line of code?
  // This line of code is looking for stored todos
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // TODO: Describe the functionality of the following `if` statement.
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: Describe the purpose of the following line of code.
  
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  // Converting todos into strings and saving them to localStorage with the setItem method
  localStorage.setItem("todos", JSON.stringify(todos));
}
// TODO: Describe the purpose of the following line of code.
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  // if there is nothing in the todo, it won't add empty todos (validation)
  if (todoText === "") {
    return;
  }
 // TODO: Describe the purpose of the following lines of code.
 // this is like an else statement, will happen if todoText==="" is false
 // pushing text to todo array
  todos.push(todoText);
  // clears out input
  todoInput.value = "";
 
  // TODO: What will happen when the following functions are called?
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
todoList.addEventListener("click", function(event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  if (element.matches("button") === true) {
    // look at parent element, get attribute index, remove from array with splice, 
    // store & rendered called again and list refreshed completely. remove and completely re-render
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    storeTodos();
    renderTodos();
  }
});

init();
