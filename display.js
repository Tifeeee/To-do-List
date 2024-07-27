function displayTodo() {
    var allTodos = JSON.parse(localStorage.getItem("listOfTodo")) || [];
    var show = document.getElementById("show");
    show.innerHTML = "";
    allTodos.forEach((todo, index) => {
        show.innerHTML += `<div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${index + 1}. ${todo.todo}</h5>
                                <p class="card-text">${todo.desc}</p>
                                <button class="editBtn" onclick="editTask(${index})">Edit</button>
                                <button class="deleteBtn" onclick="deleteTask(${index})">Delete</button>
                            </div>
                          </div>`;
    });
}

function deleteTask(index) {
    var confirmation = confirm("Are you sure you want to delete this todo?");
    if (confirmation) {
        var allTodos = JSON.parse(localStorage.getItem("listOfTodo")) || [];
        allTodos.splice(index, 1);
        localStorage.setItem("listOfTodo", JSON.stringify(allTodos));
        displayTodo();
    }
}

var editIndex;

function editTask(index) {
    editIndex = index;
    var allTodos = JSON.parse(localStorage.getItem("listOfTodo")) || [];
    document.getElementById("newTodoInput").value = allTodos[index].todo;
    document.getElementById("newDescInput").value = allTodos[index].desc;
}

function saveChanges() {
    var allTodos = JSON.parse(localStorage.getItem("listOfTodo")) || [];
    var newTodo = document.getElementById("newTodoInput").value;
    var newDesc = document.getElementById("newDescInput").value;
    allTodos[editIndex].todo = newTodo;
    allTodos[editIndex].desc = newDesc;
    localStorage.setItem("listOfTodo", JSON.stringify(allTodos));
    displayTodo();
}

displayTodo();
