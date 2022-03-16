$(document).ready(function(){
    /*Wow js*/
    new WOW().init();
    
	/*Menu-Carousel*/
    $('.myCarousel').owlCarousel({
        items: 1,
        margin: 20,
        loop: true,
        dots: false,
        autoplay: true,
        mouseDrag: true,
        touchDrag: true,
        responsive: {
            575: {
                items: 3
            },
        },
    });
    
    /*Menu-Carousel*/
    $('.eventCarousel').owlCarousel({
        items: 1,
        margin: 20,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 7000,
        mouseDrag: true,
        touchDrag: true,
        smartSpeed: 2000,
    });
    
    /*Scroll Top*/
    $(window).on("scroll", function(){
        var scroll = $(window).scrollTop();
        if(scroll >= 50){
            $('.header').addClass('sticky');
            $('.contact-number').addClass('ct-close');
        }else{
            $('.header').removeClass('sticky');
            $('.contact-number').removeClass('ct-close');
        }
    });
})


function openNav(){
    document.querySelector('.overlay').style.opacity = "1";
    document.querySelector('.overlay').style.visibility = "visible";
}
function closeNav(){
    document.querySelector('.overlay').style.opacity = "0";
    document.querySelector('.overlay').style.visibility = "hidden";
}