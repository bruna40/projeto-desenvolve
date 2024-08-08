import { getProducts, handleVerMaisClick } from './products.js';



const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

const btnMobile = document.getElementById('buttonMobile');
const btnIcon = document.getElementById('buttonIcon');

function toggleMobile() {
    const nav = document.getElementById('navBar');
    nav.classList.toggle('active');
}
btnMobile.addEventListener('click', toggleMobile);

btnIcon.addEventListener('click', () => {
    btnIcon.classList.toggle('closeIcon');
});

document.addEventListener('DOMContentLoaded', getProducts);
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Loaded');
    getProducts();

    const verMaisButton = document.getElementById('verMais');
    if (verMaisButton) {
        console.log('Ver Mais Button Found');
        verMaisButton.addEventListener('click', () => {
            console.log('Ver Mais Button Clicked');
            if (typeof handleVerMaisClick === 'function') {
                handleVerMaisClick();
            } else {
                console.error('handleVerMaisClick is not a function');
            }
        });
    } else {
        console.error('Ver Mais Button not found');
    }
});

