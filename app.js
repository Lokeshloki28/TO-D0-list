// let button = document.getElementById('add')
// let todolist = document.getElementById('todolist')
// let input = document.getElementById('input');

// let todos = [];

// window.onload = ()=>{
//     todos = JSON.parse(localStorage.getItem('todos')) || []
//     todos.forEach(todo=>addtodo(todo))

// }
// button.addEventListener('click',()=>{
//     todos.push(input.value)
//     localStorage.setItem('tools',JSON.stringify(todos))
//     addtodo(input.value)
//     input.value=''
// }) 
// function addtodo(todo){
//     let para = document.createElement('p')
//     para.innerText = todo;
//     todolist.appendChild(para)
    
//     para.addEventListener('click',()=>{
//         para.style.textDecoration = 'line-through'
//         removeEventListener(todo)
//     })
// }
// function remove(todo){
//     let index = todos.indexof(todo)
//     if (index > -1){
//         todos.splice(index,1);
//     }
//     localStorage.setItem('todos',JSON.stringify(todos))
// }




const A = document.getElementById("task-area");
      const B = document.getElementById("single-task");
      const C = document.getElementById("tasks");
      function addTask(event) {
        event.preventDefault();
        if (B.value === "") return;
        const task = createTask(B.value);
        C.appendChild(task);
        B.value = "";
      }

      function createTask(taskName) {
        const task = document.createElement("li");
        task.classList.add("task");
        task.innerHTML = `
        <input type="checkbox">
        <label>${taskName}</label>
        <span class="delete">×</span>
    `;

        const deleteButton = task.querySelector(".delete");
        deleteButton.addEventListener("click", deleteTask);

        return task;
      }

      function deleteTask(event) {
        event.target.parentElement.remove();
      }

      A.addEventListener("submit", addTask)