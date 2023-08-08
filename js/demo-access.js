const removeActiveClass = () => {
  for (let ii = 0; ii < list.length; ii++) {
    list[ii].classList.remove('active');
    sections[ii].classList.remove('active');
  }

  demoLesson.classList.remove('active');
  demoTest.classList.remove('active');
}

const addActiveClass = (element) => {
  element.classList.add('active');
}

// subject
const subject = document.querySelector('.subjects__subject-lesson');
const demoLesson = document.querySelector('.demo-lesson');

subject.addEventListener('click', () => {
  sections.forEach(element => element.classList.remove('active'));
  addActiveClass(demoLesson);
});
// subject

// test
const startBtn = document.getElementById('start-the-test');
const demoTest = document.querySelector('.demo-test');

startBtn.addEventListener('click', () => {
  removeActiveClass();
  addActiveClass(demoTest);
});

const saveBtn = document.getElementById('save-the-test');

saveBtn.addEventListener('click', () => {
  saveBtn.setAttribute('disabled', '');
});
// test

// navigetion list
const list = document.querySelectorAll('.main-menu__list-item');
const sections = document.querySelectorAll('.demo-access-section');

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', () => {
    removeActiveClass();
    addActiveClass(list[i]);
    addActiveClass(sections[i]);
  });
}
// navigation list

// full schedule button
const scheduleNav = document.querySelector('.schedule-nav');
const schedule = document.querySelector('.schedule');
const btn = document.querySelector('.btn-schedule');

btn.addEventListener('click', () => {
  removeActiveClass();
  addActiveClass(scheduleNav);
  addActiveClass(schedule);
});
// full schedulr button

// profile name
let username = 'Name';
const nameInput = document.getElementById('username');
nameInput.value = username;

nameInput.onchange = () => {
  username = nameInput.value;
  nameInput.value = username;
}
// profile name
