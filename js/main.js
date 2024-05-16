const URL = 'https://makeup-api.herokuapp.com/api/v1/products.json';

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

let allProducts = [];
let productsShown = 0;
const productsPerPage = 5;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function addToCart(index) {
    const product = allProducts[index];
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartDiv = document.getElementById('carrinhoItens');
    cartDiv.innerHTML = '';
    let total = 0;
    
    cart.forEach((product, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            ${product.name} - ${product.price} 
            <button onclick="removeFromCart(${index})">Remover</button>
        `;
        cartDiv.appendChild(itemDiv);
        total += product.price;
    });

    document.getElementById('total').innerText = `Total: $${total.toFixed(2)}`;
}

function showProducts() {
    const contentDiv = document.getElementById('itens');
    const fragment = document.createDocumentFragment();
    
    for (let i = productsShown; i < productsShown + productsPerPage && i < allProducts.length; i++) {
        const product = allProducts[i];
        const productDiv = document.createElement('div');
        productDiv.classList.add('item');
        productDiv.innerHTML = `
            <p class="titulo">${product.name}</p>
            <img src="${product.api_featured_image}" alt="${product.name}" class="imagem">
            <p class="preco">R$ ${product.price}0</p>

            <button class="botao">Comprar</button>
        `;
        fragment.appendChild(productDiv);
    }

    contentDiv.appendChild(fragment);
    productsShown += productsPerPage;

    if (productsShown >= allProducts.length) {
        document.getElementById('verMais').style.display = 'none';
    } else {
        document.getElementById('verMais').style.display = 'block';
    }
}

function getProducts() {
    const contentDiv = document.getElementById('itens');


    fetch(URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            allProducts = data;
            shuffleArray(allProducts); // Embaralha os produtos
            contentDiv.innerHTML = ''; // Limpa os esqueletos
            showProducts();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            contentDiv.innerHTML = 'There was an error fetching the data.';
        });
}

document.addEventListener('DOMContentLoaded', getProducts);
document.getElementById('verMais').addEventListener('click', showProducts);