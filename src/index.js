const { fetchData } = require("./fetcher");

document.addEventListener("DOMContentLoaded", async () => {
    const productListElement = document.getElementById('productList');

    const displayProduct = async () =>{
        try{
            const products = await fetchData();
            console.log('prod', products)

            productListElement.innerHTML = "";

            products.slice(0, 12).forEach(async (product, index) => {
                if(index % 4 ===0){
                    productListElement.innerHTML += '<div class="mb-4 w-100"></div>'
                }

                const cardElement = document.createElement('div');
                cardElement.classList.add('col-md-3');
                cardElement.innerHTML=`
                <div class="card" style="width: 18rem;">
                <img src="../assets/images/rectangle963.jpeg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">RP.${product.price}</li>
                </ul>
                <div class="card-body" flex justify-center>
                <button class="bg-[#7F56D9] text-[#ffff] px-5 py-2 rounded-md hover:bg-[#87acec] text-[#ffff]">Daftar Sekarang</button>
                </div>
              </div>
                
                
                `

                

                productListElement.appendChild(cardElement);
            });
        } catch(error){

        }
    }

    await displayProduct();
})

document.addEventListener("DOMContentLoaded", async () => {
    const productListElement = document.getElementById('productses');

    const displayProduct = async () =>{
        try{
            const products = await fetchData();
            console.log('prod', products)

            productListElement.innerHTML = "";

            products.slice(0, 12).forEach(async (product, index) => {
                if(index % 4 ===0){
                    productListElement.innerHTML += '<div class="mb-4 w-100"></div>'
                }

                const cardElement = document.createElement('div');
                cardElement.classList.add('col-md-3');
                cardElement.innerHTML=`
                <div class="card" style="width: 18rem;">
                <img src="../assets/images/rectangle963.jpeg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">RP.${product.price}</li>
                </ul>
                <div class="card-body flex justify-center">
               <button class="bg-[#7F56D9] text-[#ffff] px-5 py-2 rounded-md hover:bg-[#87acec] text-[#ffff]">Daftar Sekarang</button>
                </div>
              </div>
                
                
                `

                

                productListElement.appendChild(cardElement);
            });
        } catch(error){

        }
    }

    await displayProduct();
})

document.addEventListener("DOMContentLoaded", async () => {
    const productListElement = document.getElementById('product1');

    const displayProduct = async () =>{
        try{
            const products = await fetchData();
            console.log('prod', products)

            productListElement.innerHTML = "";

            products.slice(0, 12).forEach(async (product, index) => {
                if(index % 4 ===0){
                    productListElement.innerHTML += '<div class="mb-4 w-100"></div>'
                }

                const cardElement = document.createElement('div');
                cardElement.classList.add('col-md-3');
                cardElement.innerHTML=`
                <div class="card" style="width: 18rem;">
                <img src="../assets/images/rectangle963.jpeg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">RP.${product.price}</li>
                </ul>
                <div class="card-body flex justify-center">
               <button class="bg-[#7F56D9] text-[#ffff] px-5 py-2 rounded-md hover:bg-[#87acec] text-[#ffff]">Daftar Sekarang</button>
                </div>
              </div>
                
                
                `

                

                productListElement.appendChild(cardElement);
            });
        } catch(error){

        }
    }

    await displayProduct();
})



document.addEventListener("DOMContentLoaded", async () => {
    const productListElement = document.getElementById('product2');

    const displayProduct = async () =>{
        try{
            const products = await fetchData();
            console.log('prod', products)

            productListElement.innerHTML = "";

            products.slice(0, 12).forEach(async (product, index) => {
                if(index % 4 ===0){
                    productListElement.innerHTML += '<div class="mb-4 w-100"></div>'
                }

                const cardElement = document.createElement('div');
                cardElement.classList.add('col-md-3');
                cardElement.innerHTML=`
                <div class="card" style="width: 18rem;">
                <img src="../assets/images/rectangle963.jpeg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">RP.${product.price}</li>
                </ul>
                <div class="card-body flex justify-center">
               <button class="bg-[#7F56D9] text-[#ffff] px-5 py-2 rounded-md hover:bg-[#87acec] text-[#ffff]">Daftar Sekarang</button>
                </div>
              </div>
                
                
                `

                

                productListElement.appendChild(cardElement);
            });
        } catch(error){

        }
    }

    await displayProduct();
})

document.addEventListener("DOMContentLoaded", async () => {
    const productListElement = document.getElementById('product3');

    const displayProduct = async () =>{
        try{
            const products = await fetchData();
            console.log('prod', products)

            productListElement.innerHTML = "";

            products.slice(0, 12).forEach(async (product, index) => {
                if(index % 4 ===0){
                    productListElement.innerHTML += '<div class="mb-4 w-100"></div>'
                }

                const cardElement = document.createElement('div');
                cardElement.classList.add('col-md-3');
                cardElement.innerHTML=`
                <div class="card" style="width: 18rem;">
                <img src="../assets/images/rectangle963.jpeg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">RP.${product.price}</li>
                </ul>
                <div class="card-body flex justify-center">
               <button class="bg-[#7F56D9] text-[#ffff] px-5 py-2 rounded-md hover:bg-[#87acec] text-[#ffff]">Daftar Sekarang</button>
                </div>
              </div>
                
                
                `

                

                productListElement.appendChild(cardElement);
            });
        } catch(error){

        }
    }

    await displayProduct();
})

document.addEventListener("DOMContentLoaded", async () => {
    const productListElement = document.getElementById('product4');

    const displayProduct = async () =>{
        try{
            const products = await fetchData();
            console.log('prod', products)

            productListElement.innerHTML = "";

            products.slice(0, 12).forEach(async (product, index) => {
                if(index % 4 ===0){
                    productListElement.innerHTML += '<div class="mb-4 w-100"></div>'
                }

                const cardElement = document.createElement('div');
                cardElement.classList.add('col-md-3');
                cardElement.innerHTML=`
                <div class="card" style="width: 18rem;">
                <img src="../assets/images/rectangle963.jpeg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">RP.${product.price}</li>
                </ul>
                <div class="card-body flex justify-center">
               <button class="bg-[#7F56D9] text-[#ffff] px-5 py-2 rounded-md hover:bg-[#87acec] text-[#ffff]">Daftar Sekarang</button>
                </div>
              </div>
                
                
                `

                

                productListElement.appendChild(cardElement);
            });
        } catch(error){

        }
    }

    await displayProduct();
})