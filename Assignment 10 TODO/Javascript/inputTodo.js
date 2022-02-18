
//Selectors
//Selectors

let inputTodo = document.querySelector('#input_todo');
let inputTodoDate = document.querySelector('#input_date');
let inputCatagory = document.querySelector('#select_catagory');
let addButton = document.querySelector('.model_container .add_todo_button');

// LISTENERS
// LISTENERS

addButton.addEventListener('click', addTodo);

// Functions
// Functions

function addTodo()
{
    let text = inputTodo.value;
    let date = inputTodoDate.value;
    let catagory = inputCatagory.value.toLowerCase();

    // console.log(text)
    // console.log(date)
    // console.log(catagory)

    if (text === '' || date === '' || catagory == 0)
    {
        alert('Form Not Filled');
        return;
    }

    let data = {task: text, date: date, catagory: catagory, display: 1, completed: 0};
    
    let myStorage = window.localStorage;
    let key = 'todo_list';
    let arrStore = [];

    if (myStorage.getItem(key) != null)
    {
        arrStore = JSON.parse(myStorage.getItem(key));
    }
    
    arrStore.push(data);
    console.log(arrStore)
    myStorage.setItem(key, JSON.stringify(arrStore));
    inputTodo.value = '';
}