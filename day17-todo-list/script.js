// Select elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const clearBtn = document.getElementById("clearBtn");


// Update task count
function updateTaskCount() {
    const totalTasks = taskList.children.length;

    taskCount.textContent = `Tasks: ${totalTasks}`;
}


// Add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }


    // Create a new list item
    const taskItem = document.createElement("li");

    taskItem.textContent = taskText;


    // Mark task as completed when clicked
    taskItem.addEventListener("click", () => {
        taskItem.classList.toggle("completed");
    });


    // Add task to the list
    taskList.appendChild(taskItem);


    // Clear input
    taskInput.value = "";


    // Update count
    updateTaskCount();
}


// Add task button
addBtn.addEventListener("click", addTask);


// Add task by pressing Enter
taskInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        addTask();
    }

});


// Clear all tasks
clearBtn.addEventListener("click", () => {

    taskList.innerHTML = "";

    updateTaskCount();

});