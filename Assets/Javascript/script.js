const hamburguer = document.querySelector('.hamburguer');
const abrirModal = document.querySelector('#abrir-modal');
const mostrarModal = document.querySelector('#receber-noticias');
let inputNome = document.getElementById('nome');
let inputEmail = document.getElementById('email');
const flexContent = document.querySelectorAll('.flex-content');

hamburguer.addEventListener('click', menuOn);

function menuOn() {
    const container = document.querySelector('.container')
    container.classList.toggle('show-menu');
    const hasShowMenu = container.classList.contains('show-menu');
    hamburguer.setAttribute('aria-expanded', hasShowMenu);

    if(hasShowMenu) {
        hamburguer.setAttribute('aria-label', 'Fechar menu');
    } 
    
    else {
        hamburguer.setAttribute('aria-label', 'Abrir menu');
    }
}

abrirModal.addEventListener('click', (e) => {
    e.preventDefault();
    
    if(inputNome.value == '') {
        alert('Você precisa informar todos os campos antes de enviar!');
    } 
    
    else if(inputEmail.value == '') {
        alert('Você precisa informar todos os campos antes de enviar!');
    } 
    
    else {
        mostrarModal.classList.add('mostrar-modal');
        const btnModalFechar = document.querySelector('#fechar-modal');
        btnModalFechar.addEventListener('click', fecharModal);
    }

});

function fecharModal() {
    const mostrarModalOn = mostrarModal.classList.contains('mostrar-modal');

    if(mostrarModalOn) {
        mostrarModal.classList.remove('mostrar-modal');
        inputNome.value = '';
        inputEmail.value = '';
    }
}

// SCROLL ANIMAÇÃO
const target = document.querySelectorAll('[data-wellcamp]');
const animationFade = 'fadeOn';

function wellcampScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);

    target.forEach(function(item) {
        if(windowTop > item.offsetTop) {
            item.classList.add(animationFade);
        } else {
            item.classList.remove(animationFade);
        }
    })
}

if(target.length) {
    window.addEventListener('scroll', function() {
        wellcampScroll();
    });
}