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




let page = document.querySelector('.modal__img');
let themeButton = document.querySelector('#btn');

btn.onclick = function () {
  page.classList.toggle('modal__img2');

};



let page1 = document.querySelector('.modal__img2a');
let themeButton1 = document.querySelector('#btn1')

btn1.onclick = function () {
  page1.classList.toggle('modal__img2a2');
}

let page2 = document.querySelector('.modal__img1b');
let themeButton2 = document.querySelector('#btn2');

btn2.onclick = function () {
  page2.classList.toggle('modal__img1b2');
};


let page3 = document.querySelector('.modal__img1v');
let themeButton3 = document.querySelector('#btn3');

btn3.onclick = function(){
  page3.classList.toggle('modal__img1v2');
}

let page4 = document.querySelector('.modal__img1g');
let themeButton4 = document.querySelector('#btn4');

btn4.onclick = function(){
  page4.classList.toggle('modal__img1g2');
}

let page5 = document.querySelector('.modal__img2b');
let themeButton5 = document.querySelector('#btn5');

btn5.onclick = function(){
  page5.classList.toggle('modal__img2b2');
}


const apar1 = document.querySelector('.apar1__description');
const apar1IMG = document.querySelector('.main__img-apar1');

apar1IMG.onmouseenter = function(){
apar1.style.display = 'block';
};

apar1IMG.onmouseleave = function(){
apar1.style.display = 'none';
};



const apar2 = document.querySelector('.apar2__description');
const apar2IMG = document.querySelector('.main__img-apar2');

apar2IMG.onmouseenter = function(){
apar2.style.display = 'block';
};

apar2IMG.onmouseleave = function(){
apar2.style.display = 'none';
};

const apar3 = document.querySelector('.apar3__description');
const apar3IMG = document.querySelector('.main__img-apar3');

apar3IMG.onmouseenter = function(){
apar3.style.display = 'block';
};

apar3IMG.onmouseleave = function(){
apar3.style.display = 'none';
};

const apar4 = document.querySelector('.apar4__description');
const apar4IMG = document.querySelector('.main__img-apar4');

apar4IMG.onmouseenter = function(){
apar4.style.display = 'block';
};

apar4IMG.onmouseleave = function(){
 apar4.style.display = 'none';
};


const apar5 = document.querySelector('.apar5__description');
const apar5IMG = document.querySelector('.main__img-apar5');

apar5IMG.onmouseenter = function(){
 apar5.style.display = 'block';
};

apar5IMG.onmouseleave = function(){
  apar5.style.display = 'none';
 };

 const apar6 = document.querySelector('.apar6__description');
 const apar6IMG = document.querySelector('.main__img-apar6');
 
 apar6IMG.onmouseenter = function(){
  apar6.style.display = 'block';
 };
 
 apar6IMG.onmouseleave = function(){
   apar6.style.display = 'none';
  };


  // ФОРМА ОТПРАВКИ

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