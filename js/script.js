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
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});