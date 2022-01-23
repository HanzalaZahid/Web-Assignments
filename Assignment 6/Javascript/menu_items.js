function toggleMenu(item_id)
{
    int_part = item_id.substr(8, (item_id).length)
    let toggle_menu_item = document.getElementById('toggle_item_container'+int_part);
    console.log(window.getComputedStyle(toggle_menu_item).display)
    if(window.getComputedStyle(toggle_menu_item).display === 'none')
        toggle_menu_item.style.display = 'block';
    else
        toggle_menu_item.style.display = 'none';
}