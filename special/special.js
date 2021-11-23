$(function(){
    $('.header__burger').click(function(){
        $('.menu,.header__phone-menu').toggleClass('show-menu');
        $('body').toggleClass('lock');
    });
    $('.header__burger').click(function(){
        $('.header__burger').toggleClass('rotate')
    });

    // $('.child__block-images').slick({
    //     prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="../img/next1.png" alt=""></button>',
    //     nextArrow: '<button type="button" class="slick-btn slick-next"><img src="../img/back1.png" alt=""></button>',
    //     fade: true, 
    //     dots: true, 
    //     arrows: true, 
    //     autoplay: true,
    //     speed: 400,
        
    //  });

});




const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;
const timeout = 100;
if(popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++){
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function(e){
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        })
    }
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++){
        const el = popupCloseIcon [index];
        el.addEventListener('click', function (e){
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}
function popupOpen (curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector ('.popup.open');
        if(popupActive) {
            popupClose(popupActive, false);
        } else {
            bodylock();

        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}
function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnlock();
        }
    }
}
function bodylock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth +'px';

    for (let index = 0; index < lockPadding.length; index++ ) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');
    unlock = false;
    setTimeout(function(){
       unlock = true;
    }, timeout);
}
function bodyUnlock(){
    setTimeout(function(){
        for(let index = 0; index <lockPadding.length; index++){
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    },timeout);
    unlock = false;
    setTimeout(function(){
        
       unlock = true;
    }, timeout);
}
document.addEventListener('keydown', function(e){
    if (e.which === 27 ) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});