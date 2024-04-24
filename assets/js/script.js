const todoInput = document.querySelector('#todo-text');
const titleInput = document.querySelector('#title-text');
const entryInput = document.querySelector('#entry-text');
const buttonSubmit = document.querySelector('#btn-submit');
const todos = JSON.parse(localStorage.getItem("todos")) || [];

function storeTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

buttonSubmit.addEventListener('click', function (event) {

  const todoText = todoInput.value.trim();
  const titleText = titleInput.value.trim();

  if (todoText === '') {
    return;
  }

  todos.push();
  storeTodos();
  location.href = "blog.html";
});

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

