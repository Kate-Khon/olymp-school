const promotionsItems = document.querySelectorAll('.promotions__list-item');

promotionsItems.forEach(element => {
  element.addEventListener('click', () => {
    element.classList.toggle('active');
  });
});

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
