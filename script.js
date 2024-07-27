function submitTodo() {
    var inputOne = document.getElementById("inputOne").value;
    var inputTwo = document.getElementById("inputTwo").value;

    if (inputOne === "" || inputTwo === "") {
        document.getElementById("fill").innerHTML = "Enter both inputs";
    } else {
        var todo = {
            todo: inputOne,
            desc: inputTwo
        };
        var allTodos = JSON.parse(localStorage.getItem("listOfTodo")) || [];
        allTodos.push(todo);
        localStorage.setItem("listOfTodo", JSON.stringify(allTodos));
        document.getElementById("inputOne").value = "";
        document.getElementById("inputTwo").value = "";
        window.location.href = "display.html";
    }
}
