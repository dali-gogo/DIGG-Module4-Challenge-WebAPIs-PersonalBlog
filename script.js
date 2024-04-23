const newEntriesEl = $('#newEntries-form');
const usernameInputEl = $('#username-input');
const entryInputEl = $('#entry-input');
const newEntriesDisplayEl = $('#newEntries-form-display');

const allEntriesData = function (username, entry) {
  const cardColumnEl = $('<div>');
  cardColumnEl.addClass('col-12 col-sm-4 col-md-3');

  const cardEl = $('<div>');
  // add a class of .custom-card
  cardEl.addClass('card h-100');
  cardEl.appendTo(cardColumnEl);

  // add a class of .custom-card-header
  const cardUsername = $('<h5>').addClass('card-header custom-card-header').text(username);
  cardUsername.appendTo(cardEl);

  const cardBodyEl = $('<div>');
  cardBodyEl.addClass('card-body');
  cardBodyEl.appendTo(cardEl);

  const cardEntry = $('<p>').addClass('card-text').text(entry);
  cardEntry.appendTo(cardBodyEl);

  newEntriesDisplayEl.append(cardColumnEl);
};

const handleFormSubmit = function (event) {
  event.preventDefault();

  const usernameInput = usernameInputEl.val();
  const entryInput = entryInputEl.val();

  if (!usernameInput || !entryInput) {
    console.log('You need to fill out the form!');
    return;
  }

  printallEntriesData(usernameInput, entryInput);

  // reset form
  usernameInputEl.val('');
  entryInputEl.val('');
};

newEntriesEl.on('submit', handleFormSubmit);

const todoInput = document.querySelector('#todo-text');
const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');
const todoCountSpan = document.querySelector('#todo-count');

let todos = [];

// The following function renders items in a todo list as <li> elements
function renderBlogPosts() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = '';
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];

    const li = document.createElement('li');
    li.textContent = todo;
    li.setAttribute('data-index', i);

    const button = document.createElement('button');
    button.textContent = 'Complete ✔️';

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// This function is being called below and will run when the page loads.
function init() {
  // Get stored todos from localStorage
  const storedTodos = JSON.parse(localStorage.getItem('todos'));

  // If todos were retrieved from localStorage, update the todos array to it
  if (storedTodos !== null) {
    todos = storedTodos;
  }

  // This is a helper function that will render todos to the DOM
  renderBlogPosts();
}

function storeBlogPosts() {
  // Stringify and set key in localStorage to todos array
  localStorage.setItem('todos', JSON.stringify(todos));
}

localStorage.setItem('blogPosts', JSON.stringify({title:"title"}))
// Add submit event to form
todoForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === '') {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(todoText);
  todoInput.value = '';

  // Store updated todos in localStorage, re-render the list
  storeBlogPosts();
  renderBlogPosts();
});

// Add click event to todoList element
todoList.addEventListener('click', function (event) {
  const element = event.target;

  // Checks if element is a button
  if (element.matches('button') === true) {
    // Get its data-index value and remove the todo element from the list
    const index = element.parentElement.getAttribute('data-index');
    todos.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    storeBlogPosts();
    renderBlogPosts();
  }
});

// Calls init to retrieve data and render it to the page on load
init();

const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');

let mode = 'light';

themeSwitcher.addEventListener('click', function () {
  if (mode === 'light') {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
  else {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
});

