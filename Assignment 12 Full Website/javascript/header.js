let nav_item = document.querySelector('header>.left>.nav_container_small>.nav_list>.nav_list_container>.nav');
let cross = document.querySelector('header>.left>.nav_container_small>.nav_list>.top>.cancel>i');
let nav = document.querySelector('header>.left>.nav_container_small>.nav_list');
let menu = document.querySelector('header>.left>.nav_container_small>i');
// console.log(cross)
// SELECTORS
let logo = document.querySelector('header>.logo_container>.logo_layout');
let right = document.querySelector('header>.right')

nav_item.addEventListener('click', toggle_nav);
cross.addEventListener('click', closeNav);
menu.addEventListener('click', showNav)
function closeNav()
{
    // console.log('close')
    nav.style.display = 'none'
    logo.style.display = 'block'
    right.style.display = 'flex'
    
}
function showNav()
{
    // console.log('close')
    nav.style.display = 'block'
    logo.style.display = 'none'
    right.style.display = 'none'
}

function toggle_nav(event)
{
    let target = event.target;

    if(target.className === 'list_item')  
    {
        let sublist = target.children[1];
        if (typeof(sublist) !== undefined)
        {
            if(sublist.style.display === 'block')
            {
                sublist.style.display = 'none'
            }
            else
            {
                sublist.style.display = 'block'
            }
        }
    }
    if(target.tagName == 'DIV')
    {
        // let sublist = 
        // console.log(target.parentNode.children)
        let sublist = target.parentNode.children[1];
        if (typeof(sublist) !== undefined)
        {
            if(sublist.style.display === 'block')
            {
                sublist.style.display = 'none'
            }
            else
            {
                sublist.style.display = 'block'
            }
        }
    }
}