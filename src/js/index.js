"use strict";
const todoBox = document.getElementById('todo-box');
const add = document.getElementById('add');
const target = document.querySelector('todo-div');
add.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'newinput';
    input.readOnly = true;
    input.value = todoBox.value;
    todoBox.value = '';
    const edit = document.createElement('button');
    edit.id = 'edit';
    edit.innerHTML = 'Edit';
    const del = document.createElement('button');
    del.id = 'del';
    del.innerHTML = 'Delete';
    const todoCont = document.createElement('div');
    todoCont.id = 'todo-container';
    todoCont.style.display = 'block';
    todoCont.appendChild(input);
    todoCont.appendChild(edit);
    todoCont.appendChild(del);
    document.getElementById('todo-div').appendChild(todoCont);
    let observer = new MutationObserver((entries) => {
        observe(entries, observer);
    });
    const config = { childList: true };
    observer.observe(target, config);
});
function observe(entries, observer) {
    if (document.getElementById('todo-container')) {
        console.log(entries);
        document.getElementById('del').addEventListener('click', () => {
            console.log('del');
            if (document.body.contains(document.getElementById('todo-container'))) {
                console.log('del');
                document.getElementById('newinput').remove();
                document.getElementById('edit').remove();
                document.getElementById('todo-container').remove();
            }
        });
        observer.disconnect();
    }
}
