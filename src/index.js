import './styles.css';
import menuTpl from './templates/templates.hbs';
import menu from './menu.json';



const galleryMenu = document.querySelector('ul.js-menu');
//console.log(galleryMenu)

const markupMenu = menuTpl(menu);
galleryMenu.insertAdjacentHTML('beforeend', markupMenu);
//console.log(markupMenu)

const theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};


const bodyRef = document.querySelector('body');
const themeSwitchRef = document.querySelector('#theme-switch-toggle');
const STORAGE_KEY = 'light-Theme';


bodyRef.classList.add(theme.LIGHT)
themeSwitchRef.addEventListener('change', onThemeChenge);
const savedTheme = localStorage.getItem(STORAGE_KEY);

function onThemeChenge(evt) {
    bodyRef.classList.toggle(theme.LIGHT)
    bodyRef.classList.toggle(theme.DARK)

    const isLight = bodyRef.classList.contains(theme.LIGHT);
    localStorage.setItem(STORAGE_KEY, isLight);

}
//console.log(onThemeChenge)


currentTheme(savedTheme)

function currentTheme(savedTheme) {
    if (savedTheme === '') {
        bodyRef.classList.add(theme.LIGHT);
    }

    if (savedTheme === 'false') {
        bodyRef.classList.remove(theme.LIGHT);
        bodyRef.classList.add(theme.DARK);
        themeSwitchRef.checked = true;
    }

}
//console.log(currentTheme)