
export function Header() {
     
    let header = document.createElement('header');
    header.className = 'header'; 
    container.appendChild(header);

    let h1 = document.createElement('h1');
    h1.className = 'header__h1'; 
    h1.textContent = 'W E B P A C K';
    header.appendChild(h1);
     
}




