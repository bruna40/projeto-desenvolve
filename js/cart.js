let cart = [];

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

export { addToCart, updateCart };