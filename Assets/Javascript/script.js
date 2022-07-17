const hamburguer = document.querySelector('.hamburguer');
const abrirModal = document.querySelector('#abrir-modal');
const mostrarModal = document.querySelector('#receber-noticias');
let inputNome = document.getElementById('nome');
let inputEmail = document.getElementById('email');
const flexContent = document.querySelectorAll('.flex-content');
console.log(flexContent)

// for(let count = 0; count < flexContent.length; count++) {
//     // flexContent[count].removeAttribute('data-aos')
// }

hamburguer.addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('show-menu');
});

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