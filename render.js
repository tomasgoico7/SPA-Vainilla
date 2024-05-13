export function renderProductsPage(products, container) {
  container.innerHTML = "<h1>Products</h1>";
  const productsContainer = document.createElement("div");
  productsContainer.classList.add("product-grid");
  container.appendChild(productsContainer);

  products.forEach((product) => {
    const productElement = createProductCard(product);
    productsContainer.appendChild(productElement);
  });
}

export function renderAboutPage(container) {
  container.innerHTML = "<h1>About</h1><p>This is the about page content.</p>";
}

export function renderContactPage(container) {
  container.innerHTML =
    "<h1>Contact</h1><p>This is the contact page content.</p>";
}

function createProductCard(product) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");
  productCard.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h2>${product.title}</h2>
      <p>${product.description}</p>
      <p><strong>Price:</strong> $${product.price}</p>
    `;
  return productCard;
}
