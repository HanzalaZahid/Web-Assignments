$(document).ready(function()
{
    $(".expand_toggle").click(function()
    {
        // $('.dropdown').each(function()
        // {
        //     $(this).css('display', 'none')
        // })
        $(this).siblings('.dropdown').toggle();
        // bi-arrow-up
        let chil = $(this).children();
        chil.toggleClass('bi-plus bi-arrow-up');
    })
    

})



