const form = document.getElementById('formRequest')
form.addEventListener('submit', (ev) => {
  ev.preventDefault()
  const taskInput = document.getElementById('task').value
  console.log("L'ultima task inserita è:", taskInput)
  const listTask = document.createElement('ul')
  listTask.innerHTML = `<li> ${taskInput}</li>`
  const savedSection = document.getElementById('saved-contacts')
  savedSection.appendChild(listTask)
  listTask.addEventListener('dblclick', () => {
    listTask.style.textDecoration = 'none'
  })
  listTask.addEventListener('click', () => {
    listTask.style.textDecoration = 'line-through'
  })
  const buttonDelete = document.createElement('button')
  buttonDelete.innerText = 'Elimina task'
  listTask.appendChild(buttonDelete)
  buttonDelete.addEventListener('click', () => {
    listTask.remove()
  })
  form.reset()
})
