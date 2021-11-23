$(function(){
    $('.header__burger').click(function(){
        $('.menu,.header__phone-menu').toggleClass('show-menu');
        $('body').toggleClass('lock');
    });
});

$(function(){
    $('.header__burger').click(function(){
        $('.header__burger').toggleClass('rotate')
    });
});