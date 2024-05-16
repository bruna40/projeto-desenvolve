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
