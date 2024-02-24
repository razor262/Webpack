import 'normalize.css'
import './styles/main.css'; 
import cate from './image/cate.jpg';
// import { Header } from './components/Header.js';
console.log('-------------------------'); 

const myDescription = 'Webpack — это модульный сборщик (bundler) с открытым исходным кодом, написанный на JS. Он берёт несколько скриптов JavaScript с их зависимостями и объединяет в файл, который используется браузером.'; 

const container = document.createElement('div'); 
container.className = 'container'; 
document.body.appendChild(container);

export function Header() {
     
    let header = document.createElement('header');
    header.className = 'header'; 
    container.appendChild(header);

    let h1 = document.createElement('h1');
    h1.className = 'header__h1'; 
    h1.textContent = 'W E B P A C K';
    header.appendChild(h1);
     
}

Header()

let first_section = document.createElement('div');
first_section.className = 'first_section'; 
container.appendChild(first_section);

const img = document.createElement('img');
img.className = 'container__img'; 
img.src = cate;
first_section.appendChild(img); 

let section_descript = document.createElement('div');
section_descript.className = 'section_descript'; 
container.appendChild(section_descript);

let section_box = document.createElement('div');
section_box.className = 'section_box'; 
section_descript.appendChild(section_box);

let p = document.createElement('p');
p.className = 'section_text'; 
p.textContent = myDescription;
section_box.appendChild(p);

let button = document.createElement('button');
button.className = 'button_1'; 
button.textContent = 'DOWNLOAD';

  button.addEventListener("click", function(){
    location = "https://youtube.com"; // Navigate to new page
  });

section_box.appendChild(button);




