const form = document.getElementById("new-task-form");
const input = document.getElementById("new-task-title");
const todo = document.createElement("input");
const editbtn = document.createElement("button");
const delbtn = document.createElement("button");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo2 = document.createElement("input");
  todo2.id = "new-todo";
  todo2.readOnly = true;
  todo2.value = input.value;
  todo2.type = "text";
  input.value = "";
  const editbtn2 = document.createElement("button");
  editbtn2.id = "edit";
  editbtn2.innerHTML = "Edit";
  const delbtn2 = document.createElement("button");
  delbtn2.innerHTML = "Delete";
  delbtn2.id = "del";
  const container = document.createElement("div");
  container.id = "todo-div";
  container.append(todo2);
  container.append(editbtn2);
  container.append(delbtn2);
  const todoContainer = document.getElementById("todo-cont");
  todoContainer.append(container);
  delbtn2.addEventListener("click", () => {
    delbtn2?.parentElement?.remove();
  });
  editbtn2.addEventListener("click", () => {
    if (editbtn2.innerHTML === "Save") {
      todo2.readOnly = true;
      editbtn2.innerHTML = "Edit";
    } else {
      todo2.readOnly = false;
      editbtn2.innerHTML = "Save";
    }
  });
});
