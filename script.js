const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value;
    if (taskText) {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="removeBtn">Remove</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = "";

        const removeBtn = taskItem.querySelector(".removeBtn");
        removeBtn.addEventListener("click", () => {
            taskList.removeChild(taskItem);
        });
    }
});
