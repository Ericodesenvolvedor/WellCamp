const navBtn = document.querySelector('.nav-btn');

function menuOn() {
    
    const navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('ativo');

    const btnHamburguer = document.getElementById('btn-hamburguer');
    btnHamburguer.classList.toggle('ph-list');
    btnHamburguer.classList.toggle('ph-x');

    const ariaAtributo = navBar.classList.contains('ativo');
    navBtn.setAttribute('aria-expanded', ariaAtributo);

    if(ariaAtributo) {
        navBtn.setAttribute('aria-label', 'Fechar menu');
    } else {
        navBtn.setAttribute('aria-label', 'Abrir menu');
    }
}

navBtn.addEventListener('click', menuOn);