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
  const entryText = entryInput.value.trim();

  if (todoText === '' || titleText === '' || entryText === '') {
    alert("Please complete all the required fields.");
    return;
  }
  else {
  todos.push({todoText:todoText,titleText:titleText,entryText:entryText});
  storeTodos();
  location.href = "blog.html";
  }
});

const themeSwitcher = document.querySelector('#theme-switcher');
const card = document.querySelector('.card');
const row = document.querySelector('.row');
const container = document.querySelector('.container');
 
let mode = 'light';

themeSwitcher.addEventListener('click', function () {
  if (mode === 'light') {
    mode = 'dark';
    card.setAttribute('class', 'dark');
    row.setAttribute('class', 'dark');
    container.setAttribute('class', 'dark');
  }
  else {
    mode = 'light';
    card.setAttribute('class', 'light');
    row.setAttribute('class', 'light');
    container.setAttribute('class', 'light');
  }
});


