
let currentDisplay = "No Catagory Selected";
// SELECTORS

let catagorySelection = document.querySelector('.model_newtodo .select_catagory');
let catagoryDisplay = document.querySelector('.catagories .catagory_list');

let totalCount = document.querySelector('.user_info>.task_info>.total>.count')
let completedCount = document.querySelector('.user_info>.task_info>.completed>.count')
let primaryCount = document.querySelector('.user_info>.task_info>.primary>.count')



// TODO LIST SLECLTORS

let todoList = document.querySelector('.main>.body>.todo_list')

let pageTitle = document.querySelector('.main>.head>.left>.label');

//TODO DISPLAY TASKS TYPE SELECTORS

let allBtn = document.querySelector('.main>.head>.right>.tab_list>.all>button');
let completedBtn = document.querySelector('.main>.head>.right>.tab_list>.completed>button');
let primaryBtn = document.querySelector('.main>.head>.right>.tab_list>.primary>button');



// LISTENERS

todoList.addEventListener('click', function(e){changeTodo(e)});

allBtn.addEventListener('click', displayAll)
completedBtn.addEventListener('click', displayCompleted)
primaryBtn.addEventListener('click', displayIncomplete)

// CATAGORY DISPLAY
catagoryDisplay.addEventListener('click', function(e){displayByCatagory(e)})

// FUNCTIONS

function setInputCatagories()
{
    let myStorage = window.localStorage;
    let key = 'catagories';
    let catagoryList = JSON.parse(myStorage.getItem(key));
    if(catagoryList == null)
    {
        return;
    }
    catagoryList.forEach(element => {
        
        let catagoryName = element.charAt(0).toUpperCase() + element.substr(1).toLowerCase();
        // SET DROPDOWN IN ADD NEW TODO
        let opt = document.createElement('option');
        opt.value = catagoryName;
        opt.innerText = catagoryName;

        catagorySelection.appendChild(opt);

        // SIDE BAR CATAGORY LIST

        let catagoryListItem = document.createElement('li');
        catagoryListItem.classList.add('item');

        let catagoryItemButton = document.createElement('button');
        catagoryItemButton.value = catagoryName.toLowerCase();
        catagoryItemButton.innerText = catagoryName;

        catagoryListItem.appendChild(catagoryItemButton);
        catagoryDisplay.appendChild(catagoryListItem);


    });
}

setInputCatagories();

let dataStorage = window.localStorage;


function setCounts()
{
    let key = 'todo_list';
    let storedData = JSON.parse(dataStorage.getItem(key));
    let totalTasks = 0, completedTasks = 0;
    
    if (storedData == null)
    {
        console.log("Empty Tasks");
        return;
    }
    storedData.forEach(element =>
        {
            if (element.display != 1)
            {
                return;
            }
            totalTasks++;

            if(element.completed != 0)
            {
                completedTasks++;
            }
        })

    totalCount.innerText = totalTasks;
    completedCount.innerText = completedTasks;
    primaryCount.innerText = totalTasks - completedTasks;
}

setCounts();


function setTodoList(data)
{
    //delete exisiting NODES

    let todoItem = document.createElement('li');
    todoItem.classList.add('todo_item');

    // setting buttons


    let deleteButton = document.createElement('div');
    deleteButton.classList.add('option');
    deleteButton.classList.add('delete');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    todoItem.appendChild(deleteButton);

    let completedButton = document.createElement('div');
    completedButton.classList.add('option');
    completedButton.classList.add('completed');
    completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    todoItem.appendChild(completedButton);

    // SETTING TODO AND TIME

    let todoInfo = document.createElement('div');
    todoInfo.classList.add('todo_info');

    let text = document.createElement('div');
    text.classList.add('todo');
    text.innerText = data.task;
    todoInfo.appendChild(text);

    let dateTime = document.createElement('div');
    dateTime.classList.add('time');
    dateTime.innerText = data.date;
    todoInfo.appendChild(dateTime);
    todoItem.appendChild(todoInfo);


    todoList.appendChild(todoItem)

}

function displayAll()
{
    resetNavStyles()
    allBtn.classList.add('current');
    let key = 'todo_list';
    let storedData = JSON.parse(dataStorage.getItem(key));
    while(todoList.firstChild)
    {
        todoList.removeChild(todoList.firstChild);
    }
    pageTitle.innerText = currentDisplay.charAt(0).toUpperCase() + currentDisplay.substr(1).toLowerCase();;
    if (storedData == null)
    {
        return;
    }
    storedData.forEach(element => 
        {
            if(element.display != 1)
            {
                return;
            }
            if(element.catagory == currentDisplay)
            {

                setTodoList(element);
            }
        })
}

displayAll();

function changeTodo(event)
{
    let key = 'todo_list';
    let storedData = JSON.parse(dataStorage.getItem(key));
    let target = event.target;
    if(target.classList[1] == 'completed')
    {
        // console.log('Completed Hit')
        let parent = target.parentNode;
        let nodeValue1 = parent.querySelector('.todo_info>.todo').innerText;
        let nodeValue2 = parent.querySelector('.todo_info>.time').innerText;
        let changedData = [];

        storedData.forEach(element=>
            {
                if (element.task == nodeValue1 && element.date == nodeValue2)
                {
                    // console.log('found');
                    if (element.completed == 1)
                    {
                        element.completed = 0;
                        target.classList.remove('btn_active');
                    }
                    else
                    {
                        element.completed = 1;
                        target.classList.add('btn_active');
                    }
                }
                changedData.push(element);
            })
        // console.log(changedData);
        dataStorage.setItem(key, JSON.stringify(changedData));
        setCounts();
        displayCompleted();
    }
    else if(target.classList[1] == 'delete')
    {
        // console.log('Delete Hit')
        let parent = target.parentNode;
        let nodeValue1 = parent.querySelector('.todo_info>.todo').innerText;
        let nodeValue2 = parent.querySelector('.todo_info>.time').innerText;
        let changedData = [];

        storedData.forEach(element=>
            {
                if (element.task == nodeValue1 && element.date == nodeValue2)
                {
                    // console.log('found');
                    element.display = 0;
                }
                changedData.push(element);
            })
        console.log(changedData);
        dataStorage.setItem(key, JSON.stringify(changedData));
        parent.remove();
        setCounts();
    }

}


function displayCompleted()
{
    resetNavStyles()
    completedBtn.classList.add('current');
    let key = 'todo_list';
    let storedData = JSON.parse(dataStorage.getItem(key));
    while(todoList.firstChild)
    {
        todoList.removeChild(todoList.firstChild);
    }
    pageTitle.innerText = currentDisplay.charAt(0).toUpperCase() + currentDisplay.substr(1).toLowerCase();;
    if (storedData == null)
    {
        return;
    }
    storedData.forEach(element => 
        {
            if(element.display != 1)
            {
                return;
            }
            if(element.completed == 1 && element.catagory == currentDisplay)
            {

                setTodoList(element);
            }
        })
}
function displayIncomplete()
{
    resetNavStyles()
    primaryBtn.classList.add('current');
    let key = 'todo_list';
    let storedData = JSON.parse(dataStorage.getItem(key));
    while(todoList.firstChild)
    {
        todoList.removeChild(todoList.firstChild);
    }
    pageTitle.innerText = currentDisplay.charAt(0).toUpperCase() + currentDisplay.substr(1).toLowerCase();;
    if (storedData == null)
    {
        return;
    }
    storedData.forEach(element => 
        {
            if(element.display != 1)
            {
                return;
            }
            if(element.completed != 1 && element.catagory == currentDisplay)
            {

                setTodoList(element);
            }
        })
}



function displayByCatagory(event)
{
    resetNavStyles();
    allBtn.classList.add('current');
    let target = event.target;

    if (target.tagName == 'BUTTON')
    {
        currentDisplay = target.value;
        let key = 'todo_list';
        let storedData = JSON.parse(dataStorage.getItem(key));
        while(todoList.firstChild)
        {
            todoList.removeChild(todoList.firstChild);
        }
        pageTitle.innerText = currentDisplay.charAt(0).toUpperCase() + currentDisplay.substr(1).toLowerCase();;
        if (storedData == null)
        {
            return;
        }
        storedData.forEach(element => 
            {
                if(element.display != 1)
                {
                    return;
                }
                if(element.catagory == target.value)
                {

                    setTodoList(element);
                }
            })
    }
}

function resetNavStyles()
{
    allBtn.classList.remove('current');
    completedBtn.classList.remove('current');
    primaryBtn.classList.remove('current');
}