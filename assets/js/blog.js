const todoList = document.querySelector('#todo-list');

console.log(todoList);
const todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
  todoList.innerHTML = '';

  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    const div = document.createElement('div');
    div.classList.add("Post");
    todoList.appendChild(div);

    let h2 = document.createElement('h2');
    h2.textContent = todo.todoText;
    h2.setAttribute('data-index', i);
    div.appendChild(h2);

    let h3 = document.createElement('h3');
    h3.textContent = todo.titleText;
    h3.setAttribute('data-index', i);
    div.appendChild(h3);

    let p = document.createElement('p');
    p.textContent = todo.entryText;
    p.setAttribute('data-index', i);
    div.appendChild(p);
  }
}

function init() {
  const storedTodos = JSON.parse(localStorage.getItem('todos'));
  renderTodos();
}

init();


const themeSwitcher = document.querySelector('#theme-switcher');
const entries = document.querySelector('.entries');
const row = document.querySelector('.row');
const container = document.querySelector('.container');
 
let mode = 'light';

themeSwitcher.addEventListener('click', function () {
  if (mode === 'light') {
    mode = 'dark';
    entries.setAttribute('class', 'dark');
    row.setAttribute('class', 'dark');
    container.setAttribute('class', 'dark');
  }
  else {
    mode = 'light';
    entries.setAttribute('class', 'light');
    row.setAttribute('class', 'light');
    container.setAttribute('class', 'light');
  }
});


