$(document).ready(function() {

    $('.glissement').on('click', function() { // Au clic sur un élément
        let page = $(this).attr('href'); // Page cible
        let speed = 600; // Durée de l'animation (en ms)
        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, speed); // Go
        return false;
    });

    if (window.matchMedia("(min-width: 1000px)").matches) {
        $(".home__slide").css("display", "flex").animate({
            left: 100,
            opacity: 1
        }, 2000);
    } else {
        console.log('trop petit');
    };

});
