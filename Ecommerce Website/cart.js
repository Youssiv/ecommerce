function addToCart(event) {
    const button = event.target.closest('button.add-to-cart');
    const name = button.getAttribute('data-name');
    const price = parseFloat(button.getAttribute('data-price'));

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart!');
}
function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('cart-total');

    cartItemsContainer.innerHTML = '';
    let total = 0;

    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <h4>${item.name}</h4>
            <p>Price: $${item.price}</p>
        `;
        cartItemsContainer.appendChild(itemElement);
        total += item.price;
    });

    cartTotalContainer.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;

    // Add Empty Cart button if there are items in the cart
    if (cartItems.length > 0) {
        const emptyCartButton = document.createElement('button');
        emptyCartButton.id = 'empty-cart-button';
        emptyCartButton.textContent = 'Empty the Cart';
        cartTotalContainer.appendChild(emptyCartButton);

        emptyCartButton.addEventListener('click', emptyCart);
    }
}



function emptyCart() {
    localStorage.removeItem('cart');
    loadCart();
    alert('Cart has been emptied!');
}

document.addEventListener('DOMContentLoaded', loadCart);

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', addToCart);
});