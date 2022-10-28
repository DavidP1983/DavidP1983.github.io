const hamburger = document.querySelector(".hamburger"),
     container = document.querySelector('.container'),
   menu = document.getElementById("block"),
   main = document.getElementById("main"),
   overlay = document.querySelector(".menu__overlay"),
   close = document.querySelector(".menu__close");



hamburger.addEventListener("click", () => {
   //   menu.classList.add('active');
   document.body.style.overflow = 'hidden';
   menu.style.width = "320px";
   if(container.offsetWidth <= 540) {
      main.style.marginLeft = "0px";
   }else {
      main.style.marginLeft = "160px";
   }
   overlay.style.cssText = `
               background: rgba(0,0,0,0.4);
               z-index: 1; 
               `;
  
});

close.addEventListener("click", () => {
   //   menu.classList.remove('active');
   document.body.style.overflow = '';
   menu.style.width = "0";
   main.style.marginLeft = "0";
   overlay.style.cssText = `
          background: transparent;
          z-index: -2; 
          `;
});


const el = document.querySelectorAll(".skills__progressbar-bar"),
   elText = document.querySelectorAll('.skills__progressbar-rate');

const pageup = document.getElementById('pageup');


function fillOutOnScroll(el, elText, index = 0) {
   const elem = el[index];
   const elemTetx = elText[index];
   if (!elem) return;
   let width = 0;
   const id = setInterval(() => {
      if (width < elem.dataset.wid) {
         width++;
         elem.firstChild.style.width = width + "%";
         elemTetx.innerHTML = width + "%";

      } else {
         clearInterval(id);
         fillOutOnScroll(el, elText, index + 1);
      }
   }, 10);

}

function actionOnscroll() {
   if (document.documentElement.scrollTop > 2500) {
      fillOutOnScroll(el, elText);
      window.removeEventListener('scroll', actionOnscroll);
   }
   
}

window.addEventListener('scroll', actionOnscroll);


function pageUp() {
   if(document.documentElement.scrollTop > 1600) {
      pageup.classList.add('pageup__show');
   }else {
      pageup.classList.remove('pageup__show');
   }
}

window.addEventListener('scroll', pageUp);