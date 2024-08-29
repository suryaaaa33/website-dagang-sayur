let cart = [];
let totalAmount = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    totalAmount += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - Rp ${item.price}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Hapus';
        removeButton.onclick = () => removeFromCart(index);
        li.appendChild(removeButton);
        cartItems.appendChild(li);
    });
    document.getElementById('totalAmount').textContent = totalAmount;
}

function removeFromCart(index) {
    totalAmount -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

function clearCart() {
    cart = [];
    totalAmount = 0;
    updateCart();
}

function buyItems() {
    if (cart.length === 0) {
        alert('Keranjang Anda kosong.');
    } else {
        alert('Terima kasih sudah membeli produk kami!');
        clearCart();
    }
}
