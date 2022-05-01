$(document).ready(function()
{
    $('.section_reviews>.section_wrapper>.left').slick(
        {
            slidesToShow: 2,
            infinite: true,
            // variableWidth: true,
            cssEase: 'linear',
            adaptiveHeight: true,
            nextArrow: '',
            prevArrow: '',
            dots: true,
            rows:1,
            responsive:
            [
                {
                    breakpoint: 1160,
                    settings:{
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 1050,
                    settings:{
                        slidesToShow: 2
                    }
                },
            ]
        }
    )
    console.log($('.slick-slider .slick-track>.slick-active'))
})