$(function(){
    $('.header__burger').click(function(){
        $('.menu,.header__phone-menu').toggleClass('show-menu');
        $('body').toggleClass('lock');
    });
    $('.header__burger').click(function(){
        $('.header__burger').toggleClass('rotate')
    });

    $(' .main-company__silderloc').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="img/next1.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="img/back1.png" alt=""></button>',
   
        autoplay: true,
        fade: true,
        speed: 400
    });

    $(' .main-company__silder').slick({
        arrows: false,
        autoplay: true,
        fade: true,
        speed: 400,
        dots: true
    });

    $('.about-company__silder').slick({
        prevArrow: '<button type="button" class="slick-btn1 slick-prev1 "><img src="img/next1.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn1 slick-next1 "><img src="img/back1.png" alt=""></button>',
        autoplay: true,
        fade: true,
        speed: 400
    });

   
});

const popupAboutbg = document.querySelector('.popup_about-bg');
const popupAboutClose = document.querySelector('.popup_about-close');
const aboutLink = document.querySelector('.about-company__description');
const childBg = document.querySelector('.popup_child-bg');
const childClose = document.querySelector('.popup_child-close');

// всплывающее окно
//const specialBg = document.querySelector('.popup_special-bg');
//const specialClose = document.querySelector('.popup_special-close');
const childLink = document.querySelector('.child__btn');

document.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    const headerWrapper = document.querySelector(".header");
    if (scrollTop > 200) {
      headerWrapper.classList.add("header-active");
    } else {
      headerWrapper.classList.remove("header-active");
    }
  });

aboutLink.addEventListener('click',function(){
    popupAboutbg.style.display = 'block'; 
    openAbout();
});

popupAboutClose.addEventListener('click',function(){
    popupAboutbg.style.display='none'; 
    hide();
});

childLink.addEventListener('click',function(){
    childBg.style.display = 'block';
    openAbout()
});

childClose.addEventListener('click',function(){
    childBg.style.display = 'none'
    hide();
});

function openAbout(){
    body.style.overflowY = 'hidden';
}
function hide(){
    body.style.overflowY = 'unset';
    return false;
}

// всплывающее окно
//function special(){
 //   specialBg.style.display = 'block';
   // body.style.overflowY = 'hidden';
//};
//
//setTimeout(special, 1000);
//
//specialClose.addEventListener('click',function(){
   // specialBg.style.display = 'none'
   // hide()
//});
const filterBox = document.querySelectorAll('.gallery__box');
const galleryBtn = document.querySelectorAll('.gallery__btn');
 
document.querySelector('.gallery__filter-btn').addEventListener('click', event=>{
    if(event.target.tagName !== 'BUTTON') return false;
    let filterClass = event.target.dataset['btn'];
    for ( let i = 0; i < galleryBtn.length; i ++){
        galleryBtn[i].classList.remove('control-active');
       if(event.target.classList.contains('gallery__btn')){
        event.target.classList.add('control-active')
       }
    }
    filterBox.forEach(elem=>{
        elem.classList.remove('hide')
        if(!elem.classList.contains(filterClass)){
            elem.classList.add('hide')
        }
    })
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

$(document).ready(function(){
    $(window).scroll(function(){
    });
});

let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);

let selector2 = document.querySelector('input[type="tel"]');

selector2.addEventListener('input', function(){
	console.log(selector2.value)
	const re = /^\d*(\.\d+)?$/
	console.log(selector2.value.match(/[0-9]/g).length)
	console.log(selector2.value.replace(/[0-9]/g, "0"));
});

const fileInput = document.querySelector('input[type="file"]');

fileInput.addEventListener('change', (e) => {
	let files = e.currentTarget.files;
	console.log(files);

	if (files.length) {
		fileInput.closest('label').querySelector('span').textContent = files[0].name;
	} else {
		fileInput.closest('label').querySelector('span').textContent = 'Прикрепить файл';
	}

});

let validateForms = function(selector, rules, successModal, yaGoal) {
	new window.JustValidate(selector, {
		rules: rules,
		submitHandler: function(form) {
			let formData = new FormData(form);

			let xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						console.log('Отправлено');
					}
				}
			}

			xhr.open('POST', 'mail.php', true);
			xhr.send(formData);

			form.reset();

			fileInput.closest('label').querySelector('span').textContent = 'Прикрепить файл';
		}
	});
}

validateForms('.form', { email: {required: true, email: true}, tel: {required: true} }, '.thanks-popup', 'send goal');
