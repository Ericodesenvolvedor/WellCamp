const hamburguer = document.querySelector('.hamburguer');

hamburguer.addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('show-menu');
})

let faqPlusBtn = document.querySelectorAll('.faq-plus');
console.log(faqPlusBtn);

for(let count = 0; count < faqPlusBtn.length; count++)
faqPlusBtn[count].addEventListener('click', () => {
    let openResponse = document.querySelectorAll('.faq-body');
    openResponse[count].classList.toggle('active-response');
})

function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}