$(document).ready(function () {
        $(".header-contact_button").on("click", function () {
            $(".overlay-call").show()
        }),

        $(".popup-close-call").on("click", function () {
            $(".overlay-call").hide()
        }),

        $(".first-screen_button").on("click", function () {
            $(".overlay").show()
        }),

        $(".popup-close").on("click", function () {
            $(".overlay").hide()
        }),

        $(".order-subtitle").on("click", function () {
            $(".overlay-call").show()
        }),

        $(".popup-close-call").on("click", function () {
            $(".overlay-call").hide()
        }),

        $("#rose").on("click", function () {
            $(".overlay-rose").show()
        }),

        $(".popup-rose-close").on("click", function () {
            $(".overlay-rose").hide()
        }),

        $("#lily").on("click", function () {
            $(".overlay-lily").show()
        }),

        $(".popup-lily-close").on("click", function () {
            $(".overlay-lily").hide()
        }),

        $("#dahlia").on("click", function () {
            $(".overlay-dahlia").show()
        }),

        $(".popup-dahlia-close").on("click", function () {
            $(".overlay-dahlia").hide()
        }),

        $("#lilac").on("click", function () {
            $(".overlay-lilac").show()
        }),

        $(".popup-lilac-close").on("click", function () {
            $(".overlay-lilac").hide()
        }),

        $("#gerbera").on("click", function () {
            $(".overlay-gerbera").show()
        }),

        $(".popup-gerbera-close").on("click", function () {
            $(".overlay-gerbera").hide()
        }),

        $("#alstroemeria").on("click", function () {
            $(".overlay-alstroemeria").show()
        }),

        $(".popup-alstroemeria-close").on("click", function () {
            $(".overlay-alstroemeria").hide()
        }),

        $("#dahliaOnce").on("click", function () {
            $(".overlay-dahlia").show()
        }),

        $(".popup-dahlia-close").on("click", function () {
            $(".overlay-dahlia").hide()
        }),

        $("#bouquet").on("click", function () {
            $(".overlay-bouquet").show()
        }),

        $(".popup-bouquet-close").on("click", function () {
            $(".overlay-bouquet").hide()
        }),

        $("#bouquet-1").on("click", function () {
            $(".overlay-bouquet-1").show()
        }),

        $(".popup-bouquet-1-close").on("click", function () {
            $(".overlay-bouquet-1").hide()
        }),

        $("#bouquet-2").on("click", function () {
            $(".overlay-bouquet-2").show()
        }),

        $(".popup-bouquet-2-close").on("click", function () {
            $(".overlay-bouquet-2").hide()
        }),

        $(".form").submit(function () {
        return event.preventDefault(), $.ajax({
            type: "post",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val(""),
            $(".form").trigger("reset"),
            $(".overlay").hide(),
            $(".overlay-call").hide(),
            $(".overlaythanks").show()
        }),
            $(".popup-close-thanks").on("click", function () {
                $(".overlaythanks").hide()
            })
    }),
        (new WOW).init(),
        $(".first-screen-slider").slick({
        arrows: true,
        mobileFirst: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: '<div class="slider-arrow slider-arrow_left" id="topLeft"></div>',
        nextArrow: '<div class="slider-arrow slider-arrow_right" id="topRight"></div>',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 6, slidesToScroll: 1, infinite: true, dots: false
            }
        },
            {
                breakpoint: 1008,
                settings: {
                    slidesToShow: 5, slidesToScroll: 1, infinite: true, dots: false
                }
        },
            {
            breakpoint: 577, settings: {slidesToShow: 3, slidesToScroll: 1}
        },

            {
                breakpoint: 576, settings: {slidesToShow: 3, slidesToScroll: 1}
            },


            {
                breakpoint: 575, settings: {slidesToShow: 3, slidesToScroll: 1}
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 2, slidesToScroll: 1
                }
            }
            ,
            {
                breakpoint: 319,
                settings: {
                    slidesToShow: 2, slidesToScroll: 1}
            }]
    }), $(".second-screen-slider").slick({
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="slider-arrow slider-arrow_left" id="topLeft"></div>',
        nextArrow: '<div class="slider-arrow slider-arrow_right" id="topRight"></div>'
    }),

     jQuery(function (o) {
        $("#phoneNumberCall").mask("+7(999) 999-99-99"),
        $("#phoneNumber").mask("+7(999) 999-99-99")
    })
});