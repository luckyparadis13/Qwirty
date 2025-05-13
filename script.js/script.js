// === PRODUCT DATA ===
const products = [
  {
    name: "Wireless Bluetooth Speaker",
    description: "Compact and loud. Great for outdoor fun.",
    price: 27.99,
    image: "https://via.placeholder.com/200x120?text=Speaker",
  },
  {
    name: "Noise Cancelling Headphones",
    description: "Block distractions and focus with comfort.",
    price: 89.99,
    image: "https://via.placeholder.com/200x120?text=Headphones",
  },
  {
    name: "Smartwatch Series 5",
    description: "Track your activity and notifications in style.",
    price: 149.99,
    image: "https://via.placeholder.com/200x120?text=Smartwatch",
  },
  {
    name: "Wireless Keyboard",
    description: "Slim, quiet, and comfortable for long work sessions.",
    price: 39.99,
    image: "https://via.placeholder.com/200x120?text=Keyboard",
  },
  {
    name: "Gaming Mouse",
    description: "High precision and fast response time for gamers.",
    price: 25.0,
    image: "https://via.placeholder.com/200x120?text=Mouse",
  },
  {
    name: "Portable Charger",
    description: "Power on the go. Dual USB output.",
    price: 18.49,
    image: "https://via.placeholder.com/200x120?text=Charger",
  },
  {
    name: "LED Desk Lamp",
    description: "Touch control brightness and color temperature.",
    price: 22.99,
    image: "https://via.placeholder.com/200x120?text=Lamp",
  },
  {
    name: "Wireless Earbuds",
    description: "Crystal-clear sound with long battery life.",
    price: 49.99,
    image: "https://via.placeholder.com/200x120?text=Earbuds",
  },
  {
    name: "Fitness Tracker Band",
    description: "Stay active and monitor your goals daily.",
    price: 29.95,
    image: "https://via.placeholder.com/200x120?text=Fitness+Band",
  },
  {
    name: "USB-C Cable (3 Pack)",
    description: "Fast charge compatible and tangle-free design.",
    price: 12.99,
    image: "https://via.placeholder.com/200x120?text=USB-C+Cables",
  },
  {
    name: "Mini Projector",
    description: "Bring the theater to your home or backyard.",
    price: 99.99,
    image: "https://via.placeholder.com/200x120?text=Projector",
  },
  {
    name: "Laptop Stand",
    description: "Ergonomic design to reduce neck and back strain.",
    price: 34.95,
    image: "https://via.placeholder.com/200x120?text=Laptop+Stand",
  },
];

// === RENDER PRODUCTS ===
const productGrid = document.querySelector(".product-grid");

function renderProducts(items) {
  productGrid.innerHTML = "";
  items.forEach((product) => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
        <h2>${product.name}</h2>
        <img src="${product.image}" alt="${product.name}" />
        <p>${product.description}</p>
        <div class="price-cart">
          <span>$${product.price.toFixed(2)}</span>
          <button class="add-to-cart">Add to Cart 🛒</button>
        </div>
      `;
    productGrid.appendChild(div);
  });
}

renderProducts(products); // Initial load

// === ADD TO CART EVENT ===
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("add-to-cart")) {
    const product = e.target.closest(".product-card");
    const name = product.querySelector("h2").textContent;
    alert(`✅ ${name} added to cart!`);
  }
});

// === SEARCH FUNCTIONALITY ===
const searchInput = document.querySelector("#searchInput");

searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const filtered = products.filter(
    (product) =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
  );
  renderProducts(filtered);
});
