//SLICK DLIDER
$('.brand_slide').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 5,
    arrows: false,
    autoplay: true,
    focusOnSelect: true,
    pauseOnHover: false,
    responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
            }
        }
    ]
});