const list = document.querySelectorAll('.main-menu__list-item');
const sections = document.querySelectorAll('.demo-access-section');

console.log(sections);
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', () => {
      for (let ii = 0; ii < list.length; ii++) {
        list[ii].classList.remove('active');
        sections[ii].classList.remove('active');
      }

    list[i].classList.add('active');
    sections[i].classList.add('active');
  });
}

// list.forEach(element => {
//   element.addEventListener('click', () => {
//     list.forEach(unactiveEl => {
//       unactiveEl.classList.remove('active');
//     });

//     element.classList.add('active');
//   });
// });
