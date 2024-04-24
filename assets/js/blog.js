// const todoList = document.querySelector('#todo-list');
// const todoCountSpan = document.querySelector('#todo-count');

// console.log(todoList);
// let todos = [];

// function renderTodos() {
//   todoList.innerHTML = '';
//   todoCountSpan.textContent = todos.length;

//   for (let i = 0; i < todos.length; i++) {
//     const todo = todos[i];

//     const li = document.createElement('li');
//     li.textContent = todo;
//     li.setAttribute('data-index', i);

//     const button = document.createElement('button');
//     button.textContent = 'Complete ✔️';

//     li.appendChild(button);
//     todoList.appendChild(li);
//   }
// }

// function init() {
//   const storedTodos = JSON.parse(localStorage.getItem('todos'));

//   if (storedTodos !== null) {
//     todos = storedTodos;
//   }

//   renderTodos();
// }

// function storeTodos() {
//   localStorage.setItem('todos', JSON.stringify(todos));
// }

// todoForm.addEventListener('submit', function (event) {
//   event.preventDefault();

//   const todoText = todoInput.value.trim();

//   if (todoText === '') {
//     return;
//   }

//   todos.push(todoText);
//   todoInput.value = '';

//   storeTodos();
//   renderTodos();
//   location.href = "blog.html"
// });

// console.log(todoList);
// todoList.addEventListener('click', function (event) {
//   const element = event.target;

//   if (element.matches('button') === true) {
//     const index = element.parentElement.getAttribute('data-index');
//     todos.splice(index, 1);

//     storeTodos();
//     renderTodos();
//   }
// });

// init();

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
