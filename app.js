const addTodo = document.querySelector('.add')
const list = document.querySelector('.todos')
const removeTodo = document.querySelector('.delete')

const generateTemplate = todo => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="fas fa-trash-alt delete"></i>
    </li>
  `
  list.innerHTML += html
}

// Adding A Todo
addTodo.addEventListener('submit', e => {
  e.preventDefault();
  let todo = addTodo.add.value.trim()

  if (todo.length) {
    generateTemplate(todo)
    addTodo.reset()
  }
})

// Removing a Todo
list.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
})