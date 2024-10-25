const todo = [];

function addTodo() {
    const inputE = document.querySelector('.name');
    const namee = inputE.value;
    const dateE = document.querySelector('.datei');
    const namp = dateE.value;

    if (namee && namp) {
        todo.push({ name: namee, date: namp });
        console.log(todo);
        inputE.value = "";
        dateE.value = "";
        fixing();
    } else {
        console.log("Please enter both name and date.");
    }
}

const nums = [1, 3, 5, 6, 7, 8];
let total = 0;

for (let i = 0; i < nums.length; i++) {
    const det = nums[i];
    total += det;
}
console.log(total);

function fixing() {
    let todolist = "";

    todo.forEach(function (currentTodo, index) {
        const namie = currentTodo.name;
        const datee = currentTodo.date;
        let html = `<div class="todo-item">${namie} ${datee} <button class="delete-button" onclick="todo.splice(${index}, 1); fixing();">Delete</button></div>`;
        
        todolist += html;
    });

    console.log(todolist);
    document.querySelector('.button').innerHTML = todolist;
}
