
let arr = getItemFromLocalStorage();

display();

function onEnterPress(event) {
    if (event.key === "Enter") {
        addTask();
    }
}

function addTask(){
    let inputEl = document.getElementById('EnterTaskInput').value;
    if (inputEl){
        arr.push(inputEl);
        saveToLocalStorage(arr);
        document.getElementById('EnterTaskInput').value ='';
    }
    display();
}

function display(){
    let container = document.querySelector('.todoContainer')
    let newHTML = ' '
    for (let i = 0; i<arr.length; i++){
        newHTML+=`
        <div class="script_container">
            <span class="todo_tasks">${arr[i]}</span>
            <button class="todo_tasks_button" 
            onclick="deleteItems();"><i class="ri-delete-bin-fill"></i></button>
        </div>`

    }
    container.innerHTML= newHTML
}

function deleteItems(){
    arr.pop();
    saveToLocalStorage(arr);
    display();
}

function getItemFromLocalStorage(){
    let savedItem = localStorage.getItem('Tasks');
    if(savedItem){
        return JSON.parse(savedItem)
    } else {
        return [];
    }

}

function saveToLocalStorage(tasks){
    localStorage.setItem('Tasks', JSON.stringify(tasks));
}
