import { fetchProducts } from "./api.js";
import {
  renderProductsPage,
  renderAboutPage,
  renderContactPage,
} from "./render.js";

async function initializeApp() {
  const appContainer = document.getElementById("app");
  if (!appContainer) {
    console.error("Container element not found");
    return;
  }

  const links = document.querySelectorAll("nav a");
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const page = event.target.id.split("-")[0];
      renderPage(page, appContainer);
    });
  });

  const products = await fetchProducts();
  renderProductsPage(products, appContainer);
}

function renderPage(page, container) {
  container.innerHTML = "";
  switch (page) {
    case "home":
      fetchAndRenderProducts(container);
      break;
    case "about":
      renderAboutPage(container);
      break;
    case "contact":
      renderContactPage(container);
      break;
    default:
      container.innerHTML = "<h1>Page not found</h1>";
  }
}

async function fetchAndRenderProducts(container) {
  const products = await fetchProducts();
  renderProductsPage(products, container);
}

initializeApp();
