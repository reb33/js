jQuery(document).ready(function() {
    jQuery('.aboutProduct').addClass("hidden").viewportChecker({
        classToAdd: 'animated zoomInUp',
        offset: 400,
        classToRemove: 'hidden'
    });

    jQuery('.dignityAndPluses').addClass("hidden").viewportChecker({
        classToAdd: 'animated slideInUp',
        offset: 400,
        classToRemove: 'hidden'
    });

    jQuery('.screenshots').addClass("hidden").viewportChecker({
        classToAdd: 'animated rollIn',
        offset: 400,
        classToRemove: 'hidden'
    });

    jQuery('.reviewUnit').addClass("hidden").viewportChecker({
        classToAdd: 'animated bounceInLeft',
        offset: 400,
        classToRemove: 'hidden'
    });

    jQuery('.buyUnit').addClass("hidden").viewportChecker({
        classToAdd: 'animated flipInY',
        offset: 400,
        classToRemove: 'hidden'
    });

    jQuery('footer').addClass("hidden").viewportChecker({
        classToAdd: 'animated slideInUp',
        offset: 400,
        classToRemove: 'hidden'
    });
});