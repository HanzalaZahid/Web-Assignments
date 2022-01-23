$(document).ready(function()
{

    // VARIABLES
    // VARIABLES

    let scrollAreas = 0;
    let scrollPoints = [];
    scrollPoints[0] = 0;
    let scrollAmountUp = 0;
    let scrollAmountDown = 0;

    let scrollPosition = 0;
    let previousUp = 0;
    let previousDown = 0;




    $('footer').hide();

    function setSectionsHeights()
    {
        // console.log("height: "+screenHeight);
        
        $('.section').each(function()
        {
            $(this).animate({"height": screenHeight});
            scrollAreas++;
        })
        console.log(scrollAreas)
    }

    function scrollUp()
    {
        
        // console.log('up '+ window.scrollY);
        if (scrollPosition != 0)
        {
            scrollPosition--;
            window.scrollTo(0, scrollPoints[scrollPosition]);
        }
        if( scrollPosition < 2)
        {
            $('.top_nav').show();
        }
        if(scrollPosition < scrollAreas-1)
        {
            $('footer').hide();
        }
        // console.log("position: "+scrollPosition + "point: " + scrollPoints[scrollPosition])
    }
    
    function scrollDown()
    {
        // console.log('down '+window.scrollY);
        if (scrollPosition < scrollAreas-1)
        {
            scrollPosition++
            window.scrollTo(0, scrollPoints[scrollPosition]);
        
        }
        if( scrollPosition > 1)
        {
            $('.top_nav').hide();
        }
        if(scrollPosition == scrollAreas-1)
        {
            $('footer').show();
        }
        // console.log("position: "+scrollPosition + "point: " + scrollPoints[scrollPosition])
                
    }

    let screenHeight = $(window).height();
    setSectionsHeights();

    let valueToPush = 0;
    for (let i = 1; i < scrollAreas; i++) 
    {
        scrollPoints[i] = valueToPush + screenHeight;
        valueToPush = scrollPoints[i];
    }

    $('html').keydown(function(e)
    {
        if(e.keyCode == 38)
        {
            scrollUp();
        }
        else if (e.keyCode == 40)
        {
            
            scrollDown();
        }
    })

    $('html').on('mousewheel', function(e){
    

        if(e.originalEvent.wheelDelta > 0) 
        {
            if (scrollAmountUp - previousUp == 6)
            {
                previousUp = scrollAmountUp;
                scrollUp();

            }
            scrollAmountUp++;
            console.log("Previous Up : "+previousUp)
            console.log("Scroll Amount Up : "+scrollAmountUp)
            // console.log(scrollAmountUp)
        }
        else
        {
            if (scrollAmountDown - previousDown == 6)
            {
                previousDown = scrollAmountDown;
                scrollDown();
            }
            scrollAmountDown++;

            console.log("Previous Down : "+previousDown)
            console.log("Scroll Amount Down : "+scrollAmountDown)
            // console.log(scrollAmountDown)
            // scrollDown();
        }

    });

    document.addEventListener('wheel', function(e)
    {
        e.preventDefault();
    }, {passive:false})
    // scrollHandler()
    window.addEventListener("keydown", function(e) {
        // space and arrow keys
        if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false);
})