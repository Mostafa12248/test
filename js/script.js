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
const option = document.querySelector('.options p');

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

for (let x = 0; x < label.length; x++) {
  input[x].addEventListener('focus', () => {
    const test = document.querySelector('.input_focus');
    if (test) {
      test.classList.remove('input_focus');
    }
    input[x].classList.add('input_focus');
    label[x].classList.toggle('label_style');
  });

  input[x].addEventListener('blur', () => {
    label[x].classList.toggle('label_style_2');
  });
}
