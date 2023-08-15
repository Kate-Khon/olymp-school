const removeActiveClass = () => {
  for (let ii = 0; ii < list.length; ii++) {
    list[ii].classList.remove('active');
    sections[ii].classList.remove('active');
  }

  demoLesson.classList.remove('active');
  demoTest.classList.remove('active');

  // part of menu burger
  content.classList.remove('demo-access-container--active');
  menuBtn.classList.remove('menu__burger--active');
  body.classList.remove('overflow-hidden');
  // part of menu burger
}

const addActiveClass = (element) => {
  element.classList.add('active');
}

// menu burger
const menuBtn = document.querySelector('.menu__burger');
const content = document.querySelector('.demo-access-container');
const body = document.querySelector('body');

menuBtn.addEventListener('click', () => {
  content.classList.toggle('demo-access-container--active');
  menuBtn.classList.toggle('menu__burger--active');
  body.classList.toggle('overflow-hidden');
});
// menu burger

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
// full schedule button

// profile name
let username = 'Name';
const startUsername = document.getElementById('start-username');
const nameInput = document.getElementById('username');
const visibleName = document.querySelector('.main-user__name');
const enterNamePage = document.querySelector('.main__enter-the-name');

visibleName.innerHTML = username;
nameInput.value = username;

startUsername.onchange = () => {
  nameInput.value = startUsername.value;
  username = nameInput.value;
  visibleName.innerHTML = username;
  enterNamePage.style.display = "none";
  body.style.zoom = "100%";
}

nameInput.onchange = () => {
  username = nameInput.value;
  visibleName.innerHTML = username;
  nameInput.value = username;
}
// profile name
