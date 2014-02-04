function fadedEls(el, shift) {
    el.css('opacity', 0);

    switch (shift) {
        case undefined:
            shift = 0;
            break;
        case 'h':
            shift = el.eq(0).outerHeight();
            break;
        case 'h/2':
            shift = el.eq(0).outerHeight() / 2;
            break;
    }

    $(window).resize(function() {
        if (!el.hasClass('ani-processed')) {
            el.eq(0).data('scrollPos', el.eq(0).offset().top - $(window).height() + shift);
        }
    }).scroll(function() {
        if (!el.hasClass('ani-processed')) {
            if ($(window).scrollTop() >= el.eq(0).data('scrollPos')) {
                el.addClass('ani-processed');
                el.each(function(idx) {
                    $(this).delay(idx * 200).animate({
                        opacity : 1
                    }, 600);
                });
            }
        }
    });
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    window.mobile = true;
} else {
    window.mobile = false;
}



(function($) {
    $(function() {
       
        // Focus state for append/prepend inputs
        $('.input-prepend, .input-append').on('focus', 'input', function() {
            $(this).closest('.control-group, form').addClass('focus');
        }).on('blur', 'input', function() {
            $(this).closest('.control-group, form').removeClass('focus');
        });


        //Scrolling sections that dosent have parallax
        $(".projects-3 .control-btn, .content-10 .control-btn, .content-25 .control-btn, .content-4 .control-btn").on("click", function () {
            $.scrollTo($(this).closest("section").next(), {
                axis: "y",
                duration: 500
            });
            return false;
        });

        // Parallax
        $(".content-23").each(function () {
            $(this).parallax('50%', 0.3, true);
        });

        // features ani
        fadedEls($('.features').parent().find('h3'), 'h');
        $('.features > *').each(function() {
            fadedEls($(this), 150);
        });     
        
       

        // responsive
        $(window).resize(function() {
            // input-append auto width
            $('footer .input-append input[type="text"]').each(function() {
                var controlGroup = $(this).closest('.control-group');

                if ($(window).width() > 480) {
                    $(this).css('width', '');
                } else {
                    $(this).css('width', controlGroup.outerWidth() - controlGroup.find('.input-append .btn').outerWidth());
                }
            });

            // social-btns
            if ($(window).width() > 480) {
                $('footer .social-btns.mobile-processed').removeClass('mobile-processed').appendTo('footer > .container > .row > .span3:last');
            } else {
                $('footer .social-btns:not(.mobile-processed)').addClass('mobile-processed').insertBefore('footer nav');
            }
        });


        //Show text from right
        (function (el) {
            el.css('right', '-100%');

            $(window).resize(function () {
                if (!el.hasClass('ani-processed')) {
                    el.data('scrollPos', el.offset().top - $(window).height() + el.outerHeight());
                }
            }).scroll(function () {
                if (!el.hasClass('ani-processed')) {
                    if ($(window).scrollTop() >= el.data('scrollPos')) {
                        el.addClass('ani-processed');
                        el.animate({
                            right: 0
                        }, 1000);
                    }
                }
            });
        })($('.content-12 > .container'));

    });

    $(window).load(function () {
        $('html').addClass('loaded');
        $(window).resize().scroll();
    });

})(jQuery);
