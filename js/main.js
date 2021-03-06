$(function (){
    'use strict';
    
    //Adjust slider height
    var winH   = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH   = $('.navbar').innerHeight();
    
    $('.slider, .carousel-item').height(winH - (upperH + navH));
    
    //featured work shuffle
    $('.featured-work ul li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
        
        if($(this).data('class') === 'all') {
            $('.shuffle-imgs .col-lg-3').css('opacity', 1);
        } else{
            $('.shuffle-imgs .col-lg-3').css('opacity', 0.1);
            $($(this).data('class')).parent().css('opacity', 1) ;
        }
    });
});