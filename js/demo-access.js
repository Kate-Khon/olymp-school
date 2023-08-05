let username = 'Name';

const list = document.querySelectorAll('.main-menu__list-item');
const sections = document.querySelectorAll('.demo-access-section');
const btn = document.querySelector('.btn-schedule');
const scheduleNav = document.querySelector('.schedule-nav');
const schedule = document.querySelector('.schedule');
const nameInput = document.getElementById('username');

nameInput.value = username;

const removeActiveClass = () => {
  for (let ii = 0; ii < list.length; ii++) {
    list[ii].classList.remove('active');
    sections[ii].classList.remove('active');
  }
}

const addActiveClass = (element) => {
  element.classList.add('active');
}

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', () => {
    removeActiveClass();
    addActiveClass(list[i]);
    addActiveClass(sections[i]);
  });
}

btn.addEventListener('click', () => {
  removeActiveClass();
  addActiveClass(scheduleNav);
  addActiveClass(schedule);
});

nameInput.onchange = () => {
  username = nameInput.value;
  nameInput.value = username;
}
