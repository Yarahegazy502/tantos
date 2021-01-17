$(function(){
    $('.header').height($(window).height());

    $('.header .arrow i').click(function(){
        $('html,body').animate({
            scrollTop : $('.features').offset().top
        },1000)
    })
    $('.show-more').click(function(){
        $('.our-work .hidden').fadeIn(1500);
    })
})