const URL = 'https://back-projeto-desenvolve.onrender.com/products';
let productsPerPage = 5; 
let currentPage = 1; 
let totalLoaded = 5; 

function showProducts(products) {
    const contentDiv = document.getElementById('itens');
    const fragment = document.createDocumentFragment();

    if (products.length === 0) {
        if (totalLoaded === 0) {
            contentDiv.innerHTML = '<p>No products found.</p>';
        }
    } else {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('item');

            const price = parseFloat(product.price);
            const formattedPrice = price === 0
                ? '<p class="preco esgotado">Esgotado</p>'
                : `R$ ${price.toFixed(2).replace('.', ',')}`;

            if (price === 0) {
                productDiv.classList.add('esgotado');
            }

            const productHTML = `
                <p class="titulo">${product.name}</p>
                <img src="${product.image_link}" alt="${product.name}" class="imagem" onerror="this.style.display='none';">
                ${formattedPrice}
                <button class="botao" onclick="addToCart(${product.id})">Comprar</button>
            `;
            productDiv.innerHTML = productHTML;
            fragment.appendChild(productDiv);
        });
        contentDiv.appendChild(fragment);
    }
}

function getProducts() {
    const url = `${URL}?page=${currentPage}&limit=${productsPerPage}`;
    console.log('Fetching products from URL:', url);

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('API response:', data);

            if (data.products && Array.isArray(data.products)) {
                showProducts(data.products);

                totalLoaded += data.products.length;

                currentPage++;
            } else {
                throw new Error('Expected an array of products or an object containing an array of products');
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            document.getElementById('itens').innerHTML = 'There was an error fetching the data.';
        });
}

function handleVerMaisClick() {
    getProducts();
}
document.addEventListener('DOMContentLoaded', () => {
    currentPage = 1;
    totalLoaded = 5; 
    productsPerPage = 5; 
    getProducts();   
});


export { getProducts, handleVerMaisClick };
