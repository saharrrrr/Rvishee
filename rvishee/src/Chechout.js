let cartItems = [];

function addToCart(itemName, itemPrice) {
    cartItems.push({ name: itemName, price: itemPrice });
    updateCartCount();
    alert(`${itemName} has been added to your cart!`);
}

function updateCartCount() {
    const cartCountElement = document.getElementById("cart-count");
    cartCountElement.innerText = cartItems.length;
}

function goToCheckout() {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    window.location.href = "checkout.html";
}

document.getElementById("checkout-btn").onclick = goToCheckout;

window.onload = function() {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const cartItemsContainer = document.getElementById("cart-items");

    if (storedCartItems.length === 0) {
        cartItemsContainer.innerHTML = "<li>No items in the cart.</li>";
    } else {
        storedCartItems.forEach(item => {
            const listItem = document.createElement("li");
            listItem.innerText = `${item.name} - $${item.price}`;
            cartItemsContainer.appendChild(listItem);
        });
    }
}