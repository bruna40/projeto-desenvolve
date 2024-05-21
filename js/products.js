let allProducts = [];
let displayedProducts = [];
let productsShown = 0;
const productsPerPage = 5;
const URL = 'https://makeup-api.herokuapp.com/api/v1/products.json';
let cart = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function addToCart(index) {
    const product = displayedProducts[index];
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
        total += parseFloat(product.price);
    });

    document.getElementById('total').innerText = `Total: R$${total.toFixed(2).replace('.', ',')}`;
}

function showProducts() {
    const contentDiv = document.getElementById('itens');
    const fragment = document.createDocumentFragment();
    
    for (let i = productsShown; i < productsShown + productsPerPage && i < displayedProducts.length; i++) {
        const product = displayedProducts[i];
        const productDiv = document.createElement('div');
        productDiv.classList.add('item');
        const formattedPrice = `R$ ${parseFloat(product.price).toFixed(2).replace('.', ',')}`;
        productDiv.innerHTML = `
            <p class="titulo">${product.name}</p>
            <img src="${product.api_featured_image}" alt="${product.name}" class="imagem">
            <p class="preco">${formattedPrice}</p>
            <button class="botao" onclick="addToCart(${i})">Comprar</button>
        `;
        fragment.appendChild(productDiv);
    }

    contentDiv.appendChild(fragment);
    productsShown += productsPerPage;

    if (productsShown >= displayedProducts.length) {
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
            shuffleArray(allProducts);
            displayedProducts = [...allProducts];
            contentDiv.innerHTML = '';
            showProducts();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            contentDiv.innerHTML = 'There was an error fetching the data.';
        });
}

function filterProducts() {
    const filterValue = document.getElementById('filtro').value.toLowerCase();
    displayedProducts = allProducts.filter(product => product.name.toLowerCase().includes(filterValue));
    productsShown = 0; 
    document.getElementById('itens').innerHTML = '';
    showProducts(); 
}


document.addEventListener('DOMContentLoaded', getProducts);
document.getElementById('verMais').addEventListener('click', showProducts);

export { getProducts, showProducts, addToCart, updateCart, filterProducts };