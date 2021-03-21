document.addEventListener("DOMContentLoaded", () => {
  
  const taskForm = document.getElementById("create-task-form");
  const taskMain = document.getElementById("main-content");
  //const taskDescription = document.getElementById("task-description");
  
  const newTaskUl = document.getElementById("tasks");

  taskForm.addEventListener("submit",createNewTask);




  function createNewTask(event){
   event.preventDefault()
   let newTask = document.createElement("li")
   let description = document.querySelector("#new-task-description").value
   newTask.innerText = description
   newTaskUl.append(newTask)
   console.log(newTaskUl)
}

});

// const createNewTask = event => {
//   event.preventDefault();
//     const newTaskDescription = document.getElementById("new-task-description");
//     const newTask = document.createElement("li");
//     newTask.innerText = newTaskDescription.value;
  
//     appendNewTask(newTask);
//     event.target.reset();
// };



/* add event listener
preventDefault
create li
assign text to li
add li to list
*/

  





