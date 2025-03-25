let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    totalPrice += productPrice;
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - €${item.price.toFixed(2)} x ${item.quantity} 
            <button onclick="increaseQuantity('${item.name}')">+</button>
            <button onclick="decreaseQuantity('${item.name}')">-</button>
            <button onclick="removeFromCart('${item.name}')">Verwijder</button>`;
        cartItems.appendChild(li);
    });

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

function toggleProductList() {
    const productList = document.getElementById('product-list');
    const cart = document.getElementById('cart');
    productList.style.display = productList.style.display === 'none' ? 'block' : 'none';
    cart.style.display = 'none'; // Verberg het winkelwagentje bij het tonen van producten
}

function toggleCart() {
    const cart = document.getElementById('cart');
    const productList = document.getElementById('product-list');
    cart.style.display = cart.style.display === 'none' ? 'block' : 'none';
    productList.style.display = 'none'; // Verberg de productlijst bij het tonen van het winkelwagentje
}

function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = 'none'; // Verberg alle tabs
    });
    document.getElementById(tabName).style.display = 'block'; // Toon de geselecteerde tab
}

function increaseQuantity(productName) {
    const product = cart.find(item => item.name === productName);
    if (product) {
        product.quantity++;
        totalPrice += product.price;
        updateCartDisplay();
    }
}

function decreaseQuantity(productName) {
    const product = cart.find(item => item.name === productName);
    if (product) {
        product.quantity--;
        totalPrice -= product.price;
        if (product.quantity <= 0) {
            removeFromCart(productName);
        } else {
            updateCartDisplay();
        }
    }
}

function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    updateCartDisplay();
}
