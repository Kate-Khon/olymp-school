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


const osList = document.querySelectorAll('.os-list__list-item');

function checkVisible(elm) {
  const rect = elm.getBoundingClientRect();
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  const halfVH = viewHeight / 2 - 100;
  const reducedVH = halfVH + 150;

  return !(rect.bottom < reducedVH || rect.top - viewHeight >= -halfVH);
}

window.onscroll = () => {
  osList.forEach((element, i) => {   
    if (checkVisible(element)) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
}
