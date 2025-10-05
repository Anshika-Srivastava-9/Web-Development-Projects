function addTask() {
    const newTask = document.createElement('li'); 
    const taskList = document.getElementById('taskList'); 
    const taskInput = document.getElementById('inputTask'); 

    
    newTask.textContent = taskInput.value;
    taskList.appendChild(newTask); 
    taskInput.value = "";
    deletetask(newTask)
}
function deletetask(newTask){
    const deleteBtn= document.createElement('button')
    deleteBtn.textContent="Delete"
    newTask.appendChild(deleteBtn)
    deleteBtn.onclick= function(){
        newTask.remove()
    }
}
