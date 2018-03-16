$(document).ready(function() {

    $(".home__slide").css("display","flex").animate({left:100, opacity:1},2000);


    $(window).scroll(function(){
            if ($(this).scrollTop() > 700   ) {
                $('.header').fadeIn(500,"swing");
            } else {
                $('.header').fadeOut(500,"swing");
            }
        });

    $('.glissement').on('click', function() { // Au clic sur un élément
            let page = $(this).attr('href'); // Page cible
            let speed = 600; // Durée de l'animation (en ms)
            $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
            return false;
        });

});
