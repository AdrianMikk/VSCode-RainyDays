

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");
    // console.log(id);

const detailUrl = "https://rainydays.hoiskypoisky.no/wp-json/wc/store/products/";
    // console.log(id);


async function adrianErKul() {
    const response = await fetch(detailUrl + id);

    const product = await response.json();

    return product;
    // console.log(product);
    
}

function createProductDetails(product) {
console.log(product);

    const jacketContainer = document.querySelector(".productGridContainer");

jacketContainer.innerHTML += 
                      `<h1 class="product__h1 productGrid1">${product.name}</h1>
                      <img src="${product.images[1].src}" class="productImageLarge productGrid2" alt="Warm & comfortable water repellent jacket. Perfect for outdoor activities">
                      <div class="productTextContainer productGrid3">
                        <p>${product.description}</p>
                      </div>
                      <p class="product__price productGrid4">${product.prices.price / 100} kr</p>
                      <a href="checkout.html" class="product__cta productGrid5">Add to cart</a>`
}



async function main() {
    const product = await adrianErKul();
    createProductDetails(product);
}
main();
