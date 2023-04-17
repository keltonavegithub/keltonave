(function() {
    // Image Gallery Initialization
    var slider612 = new IdealImageSlider.Slider({
        'selector': '#slider-612',
        'effect': 'slide',
        'transitionDuration': 600,
        'interval': 2000
    });
    slider612.start();

    var slider614 = new IdealImageSlider.Slider({
        'selector': '#slider-614',
        'effect': 'slide',
        'transitionDuration': 600,
        'interval': 2000
    });

    var slider616 = new IdealImageSlider.Slider({
        'selector': '#slider-616',
        'effect': 'slide',
        'transitionDuration': 600,
        'interval': 2000
    });

    var sliderparking = new IdealImageSlider.Slider({
        'selector': '#slider-parking',
        'effect': 'slide',
        'transitionDuration': 600,
        'interval': 2000
    });


    var sliders = {
        '612': slider612,
        '614': slider614,
        '616': slider616,
        'parking': sliderparking,
    }

    // Tab Initialization
    $(document).on('click', '.tab', function() {
        if ($(this).hasClass('selected')) {
            return;
        }

        var opt = $(this).data('opt');
        var selected = $(this).siblings('.selected');
        selected.removeClass('selected');
        sliders[selected.data('opt')].stop();

        $(this).addClass('selected');
        sliders[opt].start();

        var selectedSlide = $('.unit-slides .slide.selected');
        setTimeout(function() {
            selectedSlide.removeClass('selected');
        }, 400);
        $('.unit-slides .slide-' + opt).addClass('selected');
    });

    // Thumbnail Gallery Initialization
    initPhotoSwipeFromDOM('.gallery-612');
    initPhotoSwipeFromDOM('.gallery-614');
    initPhotoSwipeFromDOM('.gallery-616');
    initPhotoSwipeFromDOM('.gallery-parking');
    initPhotoSwipeFromDOM('.gallery-property');
})();
