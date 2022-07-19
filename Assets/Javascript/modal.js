const abrirModal = document.querySelector('#abrir-modal');
const mostrarModal = document.querySelector('#receber-noticias');
let inputNome = document.getElementById('nome');
let inputEmail = document.getElementById('email');

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