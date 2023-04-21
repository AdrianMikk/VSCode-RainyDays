const apiBase = "https://rainydays.hoiskypoisky.no";
const woocommerceBase = "/wp-json/wc/store";
const productBase = "/products";

const pagesBase = "/wp-json/wp/v2/pages";
const fullProductURL = apiBase + woocommerceBase + productBase;

// Fetching products
async function getProducts() {
    const response = await fetch(fullProductURL);

    const products = await response.json();

    return products
}

const loader = document.querySelector(".loading-icon");

function createProductHTML(product) {
    loader.innerHTML = "";
    console.log(product);
    
    const h1 = document.querySelector("h1");
  h1.innerHTML = "MEN / WOMEN";

  const jacketContainer = document.querySelector(".JacketImageContainer");

  jacketContainer.innerHTML += 
                        `<div class="JacketImageContainer">
                          <a href="/Product.html?id=${product.id}">
                          <div class="imageContainer">
                             <img src="${product.images[0].src}"
                               alt="${product.images[0].alt}"/>
                              <p>${product.name}</p>
                              <p>${product.price_html}</p>
                         </div>
                      </div>`
}
function createProductsHTML(products) {
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        createProductHTML(product);
    }
}

async function main() {
    const products = await getProducts();
    createProductsHTML(products);
}
main();
