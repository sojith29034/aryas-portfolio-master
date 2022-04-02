$(window).scroll(function(){
    if($(window).scrollTop()){
        $("nav").addClass("nav-scroll");
    }
    else{
        $("nav").removeClass("nav-scroll");
    }
});

document.querySelector('footer .credit .myLink').href='https://www.instagram.com/sojith.sunny/';