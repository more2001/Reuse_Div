const productDiv = document.querySelector(".row");
const cartDiv = document.querySelector(".cart-row");

let products = [];

async function getProducts(){

    const response = await fetch("https://fakestoreapi.com/products");
    products = await response.json();
    
    products.map((product) => {
        productDiv.innerHTML += `
            <div class="col">
                <div class="card h-100">
                <img style="width:100px; height:100px;" src="${product.image}" alt="${product.title}">

                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                </div>

                <div class="card-footer">
                  <button type="button" class="btn btn-success" onClick="addToCart(${product.id})">Add to Cart</button>
                </div>
                </div>
            </div>
        `;
    });

}

getProducts();



//CART 

let cart = [];

function addToCart(id){
    const cartItem = products.find(product => product.id === id);

    cart.push(cartItem);

    console.table(cart);

    // cart.forEach((cart) => {
    //     cartDiv.innerHTML += `
    //         <div class="col">
    //             <div class="card h-100">
    //             <img style="width:100px; height:100px;" src="${cart.image}" alt="${cart.title}">

    //             <div class="card-body">
    //                 <h5 class="card-title">${cart.title}</h5>
    //                 <p class="card-text">${cart.description}</p>
    //             </div>

    //             // <div class="card-footer">
    //             //   <button type="button" class="btn btn-success" onClick="addToCart(${cart.id})">Add to Cart</button>
    //             // </div>
    //             </div>
    //         </div>
    //     `;
    // });
}

