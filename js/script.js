const logo = document.querySelector('.p');
const themes = document.querySelector('.themes');
const themesP = document.querySelector('.themes p');
const toggle = document.querySelector('span');
const nav = document.querySelector('nav');
const body = document.querySelector('body');
const toggleBg = document.querySelector('span');
const container = document.querySelector('.container');
const label = document.querySelectorAll('label');
const input = document.querySelectorAll('input');
const userName = document.querySelectorAll('.name');
const option = document.querySelector('.options p');
const correct = document.querySelectorAll('.correct');
const correctEmail = document.querySelector('.correct_email');
const email = document.querySelector('.email');

const emailEvent = (event) => {
  if (event.key === '@') {
    correctEmail.style.display = 'block';
  } else {
    correctEmail.style.display = 'none';
  }
};

const themesAction = () => {
  logo.classList.toggle('nav_text_color');
  toggleBg.classList.toggle('nav_text_color');
  toggle.classList.toggle('toggle_style');
  nav.classList.toggle('nav_style');
  body.classList.toggle('body_style');
  themesP.classList.toggle('nav_text_color');
  container.classList.toggle('container_style');
  label.classList.toggle('nav_text_color');
  option.classList.toggle('option_style');
};

themes.addEventListener('click', themesAction);
email.addEventListener('keydown', emailEvent);

for (let x = 0; x < label.length; x++) {
  input[x].addEventListener('focus', () => {
    const test = document.querySelector('.input_focus');
    if (test) {
      test.classList.remove('input_focus');
    }
    input[x].classList.add('input_focus');
    label[x].classList.add('label_style');
  });
}

for (let z = 0; z < userName.length; z++) {
  userName[z].addEventListener('input', () => {
    if (userName[z].value.trim() !== '') {
      correct[z].style.display = 'block';
    } else {
      correct[z].style.display = 'none';
    }
  });
}
