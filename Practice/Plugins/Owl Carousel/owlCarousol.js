$(document).ready(()=>
{
    $('.owl-carousel').owlCarousel(
        {
            items:6,
            margin: 10,
            loop: true,
            center: true,
            // mouseDrag: false,
            // freeDrag: true,
            // stagePadding: 80,
            // mergeFit: true,
            // autoWidth: true,
            // nav: true,
            // // rewind: false,
            // // slideBy: 5
            dots: true,
            dotsEach: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsiveClass: true,
            responsive:
            {
                1920:
                {
                    items: 6,
                    nev: false
                },
                1080:
                {
                    items: 3,
                    nav: false
                },
                600:
                {
                    items: 2,
                    nav: true
                },
                0:
                {
                    items: 1,
                    nav: true
                }
            }
        }
    );
})