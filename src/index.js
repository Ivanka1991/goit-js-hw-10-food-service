import menuTpl from './templates/templates.hbs';
import menuElement from './menu.json';
import './styles.css';


let menu = document.querySelector('.js-menu');

function buildMenu(array) {
    const markup = array.map(post => menuTpl(post)).join('');
    menu.insertAdjacentHTML('beforeend', markup);
}

buildMenu(menuElement);

const refs = {
  body: document.querySelector('body'),
  switch: document.querySelector('.js-switch-input'),
};

const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.switch.addEventListener('change', setClassList);
refs.switch.addEventListener('change', setLocalStorage);

function setClassList(e) {
    const check = refs.switch.checked;

    if (check) {
        refs.body.classList.add(theme.DARK);
        refs.body.classList.add(theme.LIGHT);
    } else {
        refs.body.classList.add(theme.LIGHT);
        refs.body.classList.add(theme.DARK);
    }
}
function setLocalStorage(e) {
    const check = refs.switch.checked;
    if (check) {
        localStorage.setItem('theme', theme.DARK);
    } else {
        localStorage.removeItem('theme');
        localStorage.setItem('theme', theme.LIGHT);
    }
}
const themeInLocal = localStorage.getItem('theme');

if (themeInLocal === theme.DARK) {
    refs.body.classList.add(theme.DARK);
    refs.switch.checked = true;
}