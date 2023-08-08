const promotionsImgs = document.querySelectorAll('.promotions__list-part--1');
const promotionsInfo = document.querySelectorAll('.promotions__list-part--2');

for (let i = 0; i < promotionsImgs.length; i++) {
  promotionsImgs[i].addEventListener('click', () => {
    promotionsImgs[i].classList.remove('active');
    promotionsInfo[i].classList.add('active');
  });
  
  promotionsInfo[i].addEventListener('click', () => {
    promotionsImgs[i].classList.add('active');
    promotionsInfo[i].classList.remove('active');
  });
}
