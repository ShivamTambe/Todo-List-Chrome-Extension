let resultElement = document.getElementById('result');
let retrievedArrayData = localStorage.getItem('myArrayData');
let dataArrayToStore = retrievedArrayData ? JSON.parse(retrievedArrayData) : [];

let taskContainer = document.getElementById('rem_tasks');
// localStorage.setItem('myArrayData', []);
if(dataArrayToStore){
    for (let i = 0; i < dataArrayToStore.length; i++){
        taskContainer.innerHTML += `<div class="task" id=${i}> ${dataArrayToStore[i]} <input type="checkbox" class="checkbox" name="" id="" data-value=${i}></div>`;
    }
}

function add() {
    let textValue = document.getElementById('add_task').value;

    let retrievedArrayData = localStorage.getItem('myArrayData');

    // let dataArrayToStore = retrievedArrayData ? JSON.parse(retrievedArrayData) : [];

    if (textValue != '') {
        dataArrayToStore.push(textValue);
        console.log(textValue);
        let jsonString = JSON.stringify(dataArrayToStore);
        localStorage.setItem('myArrayData', (jsonString));
        let tasks_no = document.getElementsByClassName("task").length+1;
        taskContainer.innerHTML += `<div class="task" id=${tasks_no}> ${textValue} <input type="checkbox" class="checkbox" name="" id="" data-value=${tasks_no}></div>`;
    }
}

function remove() {
    let tasks = document.getElementsByClassName("task");
    let checkboxes = document.getElementsByClassName("checkbox");
    console.log(tasks.length);
    for (let i = 0; i < tasks.length; i++){
        if(checkboxes[i].checked){
            console.log(i);
            dataArrayToStore.splice(i, 1);
            // tasks[i].remove();

            localStorage.setItem('myArrayData', JSON.stringify(dataArrayToStore));
            taskContainer.innerHTML = "";
            for (let i = 0; i < dataArrayToStore.length; i++){
                taskContainer.innerHTML += `<div class="task" id=${i}> ${dataArrayToStore[i]} <input type="checkbox" class="checkbox" name="" id="" data-value=${i}></div>`;
            }
        }
    }
    for (let i = 0; i < tasks.length; i++){
        tasks[i].id=(i+1);
        checkboxes[i].id=(i+1);
    }
}
const btn = document.getElementById('btn');
btn.addEventListener('click', add);

const rem = document.getElementById('remove');
rem.addEventListener('click', remove);