AOS.init();

$(window).scroll(function(){
    if($(window).scrollTop()){
        $("nav ul").addClass("nav-scroll");
    }
    else{
        $("nav ul").removeClass("nav-scroll");
    }
});

$('#carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    autoplay: true,
    autoplayTimeout: 1500,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
        1020:{
            items:3
        }
    }
})
$('#slider').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    dots: true,
    responsive:{
        0:{
            items:1
        },
    }
})

document.querySelector('footer .credit .myLink').href='https://www.instagram.com/sojith.sunny/';

// to change links:
// this is one link, 
// then in blog folder one js file 
// and for art folder - at the end of the body of the index file