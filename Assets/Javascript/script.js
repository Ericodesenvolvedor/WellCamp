const btnMenu = document.querySelector('.logo-btn');
const navigation = document.querySelector('.navigation');

btnMenu.addEventListener('click', () => {
    navigation.classList.toggle('navOn');

    const navOn = navigation.classList.contains('navOn'); 

    const containerGrid = document.querySelector('.container-grid');        
    const nav = document.querySelector('.navigation');        
    const content = document.querySelector('.content-items');   
    const btnMenuIcon = document.getElementById('btn-menu-icon');

    if(navOn) {
        containerGrid.classList.add('row-grid');
        nav.classList.add('col-grid');
        content.classList.add('col-grid');
        btnMenuIcon.classList.remove('ph-list-bold');
        btnMenuIcon.classList.add('ph-x-fill');
    } else {
        btnMenuIcon.classList.add('ph-list-bold');
        btnMenuIcon.classList.remove('ph-x-fill');
        containerGrid.classList.remove('row-grid');
        nav.classList.remove('col-grid');
        content.classList.remove('col-grid');
    }
});