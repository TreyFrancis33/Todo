
const form = <HTMLFormElement> document.getElementById('new-task-form')
const input = <HTMLInputElement> document.getElementById('new-task-title')
const todo = document.createElement('input')
const editbtn = document.createElement('button')
const delbtn = document.createElement('button')

form.addEventListener('submit',e => {
	e.preventDefault();
	const todo = document.createElement('input')
	todo.id = 'new-todo'
	todo.readOnly = true
	todo.value = input.value
	todo.type = 'text'
	input.value = ''
	const editbtn = document.createElement('button')
	editbtn.id = 'edit'
	editbtn.innerHTML = 'Edit'
	const delbtn = document.createElement('button')
	delbtn.innerHTML = 'Delete'
	delbtn.id = 'del'
	const container = document.createElement('div')
	container.id = 'todo-div'
	container.append(todo)
	container.append(editbtn)
	container.append(delbtn)
	const todoContainer = <HTMLDivElement> document.getElementById('todo-cont')
	todoContainer.append(container)

	delbtn.addEventListener('click',() => {
		delbtn?.parentElement?.remove()
	})

	editbtn.addEventListener('click',() => {
		if (editbtn.innerHTML === 'Save') {
			todo.readOnly = true
			editbtn.innerHTML = 'Edit'
		} else {
			todo.readOnly = false
			editbtn.innerHTML = 'Save'
		}
	})
})


