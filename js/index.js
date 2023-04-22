
const fullProductURL = "https://rainydays.hoiskypoisky.no/wp-json/wc/store/products";

const featured = "?featured=true";

async function fetchFeatured() {
    const response = await fetch(fullProductURL + featured);
    const data = await response.json();
    
    return data;
}
const featuredContainer = document.querySelector(".featuredContainer");


function renderFeatured(data) {
    for (let i = 0; i < data.length; i++) {
        const featuredProduct = data[i];
          console.log(featuredProduct);

          featuredContainer.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
          featuredContainer.style.maxHeight = "240px";
          featuredContainer.style.display = "flex";
          featuredContainer.style.justifyContent = "center";
          featuredContainer.style.alignContent = "center";
          featuredContainer.style.flexWrap = "wrap";
          

          featuredContainer.innerHTML += 
                                          `<div style="scale: 0.7" class="featuredJacket">
                                              <div>
                                                  <a href="/Product.html?id=${featuredProduct.id}">
                                              </div>    
                                              <div class="imageContainer">
                                              <h2 style="margin-bottom: 0px; color: white; font-size: 1.2rem">Featured</h2>
                                                  <img src="${featuredProduct.images[0].src}"
                                                  alt="${featuredProduct.images[0].alt}"/>
                                                  <p>${featuredProduct.name}</p>
                                                  <p>${featuredProduct.price_html}</p>
                                              </div>
                                          </div>`
    }

}

async function main() {
  const products = await fetchFeatured();
  renderFeatured(products)
}

main();

