// SELECTORS
let catagoryName = document.querySelector('.model_catagories .inputCatagory');
let catagorySubmit = document.querySelector('.model_catagories .add_catagory_button');

// LISTENERS

catagorySubmit.addEventListener('click', addCatagory);

// FUNCTIONS

function addCatagory()
{
    let _catagory = catagoryName.value;
    let catagory = _catagory.toLowerCase();
    if (catagory == '')
    {
        alert('Please Enter Catagory Name');
        return
    }

    let myStorage = window.localStorage;

    let key = 'catagories';
    let catagoryArr = [];
    if (myStorage.getItem(key) != null)
    {
        catagoryArr = JSON.parse(myStorage.getItem(key));
    }

    let error = false;
    catagoryArr.forEach(element => {
        if (element == catagory)
        {
            alert('catagory already exists');
            error = true;
        }
    });

    if (error == true)
    {
        return;
    }
    catagoryArr.push(catagory);
    myStorage.setItem(key, JSON.stringify(catagoryArr));
    catagoryName.value = '';
}