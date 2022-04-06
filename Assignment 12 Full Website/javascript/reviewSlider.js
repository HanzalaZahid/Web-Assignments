let images= document.querySelector('.section4>.section_container>.bottom>.card>.images');
console.log(images)
$(document).ready(
    function()
    {
        if ( $(window).width() < 942)
        {
            images.classList.add("sliderImages")
            $('.sliderImages').slick();
        }
        $(window).resize(
            function() 
            {
                if ( $(window).width() < 942 ) 
                {
                    images.classList.add("sliderImages");
                    $('.sliderImages').slick();
                }
                else 
                {
                    $('.sliderImages').slick('unslick');
                    images.classList.remove("sliderImages")
                }
            }
        )
        $('.small').slick(
            {
                dots: true,
                slidesTOShow: 1,
                // autoplay: true,
                arrows: false
            }
        );
    }
    
)
