//Selectors

//NEW TODO
let model = document.querySelector('.model_newtodo');
let modelContainer = document.querySelector('.model_newtodo>.model_container');
let closeButton = document.querySelector('.model_newtodo>.model_container>.head>.right>.close>i');
let openModelButton = document.querySelector('.main>.body>.new_todo');

// CATAGORIES
let _model = document.querySelector('.model_catagories');
let _modelContainer = document.querySelector('.model_catagories>.model_container');
let _closeButton = document.querySelector('.model_catagories>.model_container>.head>.right>.close>i');
let _openModelButton = document.querySelector('.extras>.btn_add_catagory');

//Update

//Listeners
closeButton.addEventListener('click', closeModel);
openModelButton.addEventListener('click', openModel);

_closeButton.addEventListener('click', _closeModel);
_openModelButton.addEventListener('click', _openModel);




//Functions
function closeModel()
{
    model.style.display = 'none';
    modelContainer.classList.remove('slideDown');
}
function openModel()
{
    model.style.display = 'block';
    modelContainer.classList.add('slideDown');
}

function _closeModel()
{
    _model.style.display = 'none';
    _modelContainer.classList.remove('slideDown');
}
function _openModel()
{
    _model.style.display = 'block';
    _modelContainer.classList.add('slideDown');
}