const container = document.querySelector('.container');
const menuBtn = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', () => {
    container.classList.toggle('active');
});