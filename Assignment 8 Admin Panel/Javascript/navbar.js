$(document).ready(function()
{
    $(".nav_item").click(function()
    {
        $(this).children(".nav_dropdown").toggle();
    })
})




function setheader()
{
        let element = $(".content_wrapper>.header");
        let margin = element.css("margin-left");
        let screenwidth = $("body").prop("clientWidth");
        if (margin == '60px')
        {
            element.animate({ 'margin-left': 0});
            element.css('width', screenwidth - 320);
        }
        else
        {
            element.animate({ 'margin-left': 60});
            element.css('width', screenwidth - 60);
        }
}

function setBody()
{
        let element = $(".content_wrapper");
        let padding = element.css("padding-left");
        if (padding == '320px')
        {
            element.animate({ 'padding-left': 0});
        }
        else
        {
            element.animate({ 'padding-left': 320});
        }
}

function flipButton()
{
    $(nav_toggle_button).toggleClass('flip');
}

function setNavbar()
{
    let toggleWidth = $(".navbar").width() <= 60 ? "320px" : "60px";
    $('.navbar').animate({ width: toggleWidth });
}

function toggleElements()
{
    $(".toggle_element").toggle();
}

$(document).ready(
    function()
    {
        $("#nav_toggle_button").click(function()
        {
            flipButton();
            toggleElements();
            setBody();
            setheader();
            setNavbar();
        })

        if (window.innerWidth < 1580)
        {
            flipButton();
            toggleElements();
            setBody();
            setheader();
            setNavbar();
        }
    }
)

