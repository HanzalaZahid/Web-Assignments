$(document).ready(()=>
{
    $('.slider').slick(
    {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 5,
            variableWidth: true,
            centerMode: true,
            // adaptiveHeight: true
            centerPadding: '160px',
            autoplay: true,
            speed: 2000,
            // cssEase: 'linear',
            dots: true,
            // focusOnSelect: true,
            responsive:[
                {
                    breakpoint: 768,
                    settings:
                    {
                        arrows:false,
                        centerMode: true,
                        centerPadding: '60px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 520,
                    settings:
                    {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '59px',
                        slidesToShow: 1
                    }
                }
            ]
    }
    );
})