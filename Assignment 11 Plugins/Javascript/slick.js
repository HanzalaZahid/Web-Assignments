$(document).ready(()=>
{
    $('.slider').slick(
        {
            dots: true,
            infinite: true,
            variableWidth: true,
            // adaptiveHeight: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1000,
            centerMode: true,
            pauseOnHover: true
            // prevArrow: '<button type="button" class="slick-prev">Previous</button>'
            
        }
    );
})