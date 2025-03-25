function toggleProductList() {
    const productList = document.getElementById('product-list');
    const cart = document.getElementById('cart');
    productList.style.display = productList.style.display === 'none' ? 'block' : 'none';
    cart.style.display = 'none'; // Verberg het winkelwagentje bij het tonen van producten
}
