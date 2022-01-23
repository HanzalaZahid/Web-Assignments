$(document).ready(function()
{

    


    $(window).resize(function()
    {
        let header = $('.content_wrapper>.header');
        let margin = header.css("margin-left");
        let screenwidth = $("body").prop("clientWidth");

        if ( margin == "60px")
        {
            header.css('width', screenwidth - 60);
        }
        else
        {
            header.css('width', screenwidth - 320);
            
        }
    })
})