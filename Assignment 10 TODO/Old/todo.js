//selectors

const inputTodo = document.querySelector('.todo_text');
const submitTodo = document.querySelector('.btnSubmit');
const todolist = document.querySelector('.todo_list')

//event Listeners

submitTodo.addEventListener('click', addNewTodo);
todolist.addEventListener('click', function(e){deleteTodo(e)});

// SET TODO LIST ON FIRST LOAD
let todoArr = [];
const myStorage = window.localStorage;
if (myStorage.getItem('todoList') != null)
{
    let todoStorageList = JSON.parse(myStorage.getItem('todoList'));
    todoArr = todoStorageList;
    todoStorageList.forEach(element => {
        setTodo(element)
    });
}
//functions

function addNewTodo(event)
{
    event.preventDefault();
    let todoText = inputTodo.value;
    if (todoText === '')
    {
        return
    }
    setTodo(todoText);
    addToStorage(todoText);
    inputTodo.value = '';
}

function setTodo(data)
{
    //create container
    let itemContainer = document.createElement('div');
    itemContainer.classList.add('item_container');

    //create text Node
    let listText = document.createElement('li');
    listText.classList.add('item_text');
    listText.innerText = data;

    //create delete button
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete_todo');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    //append childs
    itemContainer.appendChild(listText);
    itemContainer.appendChild(deleteButton);
    todolist.appendChild(itemContainer);
}

function deleteTodo(e)
{
    if (e.target.className == 'delete_todo')
    {
        let target = e.target;
        let parent = target.parentNode;
        let nodeValue = parent.querySelector('li').innerText;
        let indexToDelete = todoArr.indexOf(nodeValue);
        todoArr.splice(indexToDelete, 1);
        myStorage.setItem('todoList', JSON.stringify(todoArr));
        parent.remove();
    }
}

//Local Storage
function addToStorage(data)
{
    todoArr.push(data);
    myStorage.setItem('todoList', JSON.stringify(todoArr));
}

// myStorage.clear()