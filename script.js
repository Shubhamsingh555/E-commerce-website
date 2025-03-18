const products = [
    { id: 1, name: "Traditional Kurta", price: 1200, image: "kurta.jpg" },
    { id: 2, name: "Wireless Headphones", price: 3000, image: "headphone.jpg" },
    { id: 3, name: "Smartwatch", price: 4000, image: "smart watch.jpg" }
];

let cart = [];

function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    displayCart();
}

function displayCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
    let totalPrice = 0; // Initialize total price
    if (cart.length === 0) {
        cartDiv.innerHTML = '<p>No items in cart</p>';
    } else {
        cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.innerHTML = `${item.name} - ₹${item.price}`;
            cartDiv.appendChild(itemDiv);
            totalPrice += item.price; // Add price to total
        });
    }
    document.getElementById('total-price').innerHTML = `Total: ₹${totalPrice}`; // Display total price
}

// Call the function to display products when the page loads
displayProducts();