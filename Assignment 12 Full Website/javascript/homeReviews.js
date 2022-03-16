let userImage = document.querySelectorAll('.reviews .bottom .card .images>.user_image');
let comment = document.querySelector('.reviews .bottom .card .text');
let name = document.querySelector('.reviews .bottom .card .about>.name');

let nameArray = ["Hanzala","Basit Dante","Ali Nawaz","Rana Abdur Rehman","Hassan"]


function updateReview(user)
{
    // console.log("update")
    let usernumber = parseInt(user.slice(-1));
    // console.log(usernumber)
    comment.textContent = 'This is review of '+nameArray[usernumber-1];
    name.textContent = nameArray[usernumber-1];
}
userImage.forEach(image=>{
    // console.log(image)
    image.addEventListener('click', function()
    {
        updateReview(image.classList[1])
    })
})