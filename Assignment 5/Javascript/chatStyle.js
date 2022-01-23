var elements = document.getElementsByClassName("sent_message");
    for (var i = 0; i < elements.length; i++)
    {
        var currentWidth = elements[i].offsetWidth;
        elements[i].style.marginLeft=(537-currentWidth+"px");
    }