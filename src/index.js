document.addEventListener("DOMContentLoaded", () => {
  
  const taskForm = document.getElementById("task-form");
  const taskMain = document.getElementById("task-main");
  const taskDescription = document.getElementById("task-description");
  
  const newTaskUl = document.getElementById("tasks");

  newtaskform.addEventListener("submit",createNewTask);


});


const createNewTask = event => {
  event.preventDefault();
    const newTaskDescription = document.getElementById("new-task-description");
    const newTask = document.createElement("li");
    newTask.innerText = newTaskDescription.value;
  
    appendNewTask(newTask);
    event.target.reset();
};





  





