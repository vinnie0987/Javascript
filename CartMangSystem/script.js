// Global array to store products
let addedDataJSON = [];

// Function to fetch product data and add to the global array
async function addProducts() {
  try {
    // Fetch data from API endpoint
    const response = await fetch('http://localhost:3000/addedProdJson'); // Replace with actual API endpoint
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    if (response.ok) {
      console.log("okaaay");
      
    }

    console.log(response);
    

    // Parse the JSON response
    const data = await response.json();
    console.log(data);
    

    // Add fetched data to global array
    addedDataJSON = addedDataJSON.concat(data);

    console.log('Products added successfully:', addedDataJSON);
  } catch (error) {
    console.error('Error fetching and adding products:', error);
  }
}

addProducts()




  // Function to populate product data onto the HTML page
function populateProducts() {
  // Access the global array containing product data
  const productContainer = document.getElementById('product-container'); // Ensure there's a container with this ID

  // Clear previous content
  productContainer.innerHTML = '';

  // Iterate through each product in the array
  addedDataJSON.forEach(product => {
    // Create HTML elements dynamically
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    const productImg = document.createElement('img');
    productImg.src = product.imageUrl;
    productImg.alt = product.title;

    const productTitle = document.createElement('h2');
    productTitle.textContent = product.title;

    const productPrice = document.createElement('p');
    productPrice.textContent = `Price: $${product.price}`;

    const productDate = document.createElement('p');
    productDate.textContent = `Date: ${product.date}`;

    const productLocation = document.createElement('p');
    productLocation.textContent = `Location: ${product.location}`;

    // Append product details to the product div
    productDiv.appendChild(productImg);
    productDiv.appendChild(productTitle);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(productDate);
    productDiv.appendChild(productLocation);

    // Append the product div to the container
    productContainer.appendChild(productDiv);
  });
}


// Global array to store cart items
let cart = [];

// Add product to cart
function addToCart(product) {
  cart.push({ ...product, quantity: 1 });
  console.log('Product added to cart:', cart);
  updateCartUI();
}

// Delete product from cart
function deleteProductFromCart(productId) {
  cart = cart.filter(product => product.id !== productId);
  console.log('Product removed from cart:', cart);
  updateCartUI();
}

// Increase product quantity in cart
function increaseProductQuantity(productId) {
  const product = cart.find(item => item.id === productId);
  if (product) {
    product.quantity++;
    console.log('Product quantity increased:', product);
    updateCartUI();
  }
}

// Reduce product quantity in cart
function reduceProductQuantity(productId) {
  const product = cart.find(item => item.id === productId);
  if (product) {
    product.quantity--;
    if (product.quantity === 0) {
      deleteProductFromCart(productId); // Remove product if quantity is 0
    } else {
      console.log('Product quantity reduced:', product);
      updateCartUI();
    }
  }
}

// Edit product quantity in cart
function editProductInCart(productId, newQuantity) {
  const product = cart.find(item => item.id === productId);
  if (product) {
    product.quantity = newQuantity;
    console.log('Product quantity edited:', product);
    updateCartUI();
  }
}

// Update the cart UI to reflect changes
function updateCartUI() {
  const cartContainer = document.getElementById('cart-container'); // Ensure there's a container with this ID
  cartContainer.innerHTML = '';

  cart.forEach(product => {
    const cartItemDiv = document.createElement('div');
    cartItemDiv.classList.add('cart-item');

    const itemTitle = document.createElement('h2');
    itemTitle.textContent = `${product.title} (x${product.quantity})`;

    const itemPrice = document.createElement('p');
    itemPrice.textContent = `Price: $${product.price * product.quantity}`;

    cartItemDiv.appendChild(itemTitle);
    cartItemDiv.appendChild(itemPrice);
    cartContainer.appendChild(cartItemDiv);
  });
}

window.onload = function() {
  addProducts().then(() => populateProducts());
};





