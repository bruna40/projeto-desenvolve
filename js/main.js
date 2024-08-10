import { searchProducts, restoreProducts, handleVerMaisClick, getProducts } from './products.js';

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
const searchInput = document.getElementById('search-input');

btnMobile.addEventListener('click', () => {
    const nav = document.getElementById('navBar');
    nav.classList.toggle('active');
});

btnIcon.addEventListener('click', () => {
    btnIcon.classList.toggle('closeIcon');
});

document.addEventListener('DOMContentLoaded', () => {
    getProducts();

    const loadMoreButton = document.getElementById('load-more-button');
    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', () => {
            console.log('Load More Button Clicked');
            if (typeof handleVerMaisClick === 'function') {
                handleVerMaisClick();
            } else {
                console.error('handleVerMaisClick is not a function');
            }
        });
    } else {
        console.error('Load More Button not found');
    }

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value;
            if (searchTerm) {
                searchProducts(searchTerm);
            } else {
                restoreProducts(); 
            }
        });
    } else {
        console.error('Search Input not found');
    }
});
