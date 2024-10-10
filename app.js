// document.getElementById('load-products').addEventListener('click', () => {

// fetch('http://localhost:8085/products')
//     .then(response => response.json()) // convert the response into json
//     .then(products => {
//         const productList = document.getElementById('product-list'); // get the ul element
//         productList.innerHTML = '';

//         //loop through each product
//         products.foreach(product => {
//             // create a new list item for each product
//             const li = document.createElement('li');
//             li.textContext = `${product.name} - $${product.price}`//set the text content

//             // add the list item to the <ul>
//             productList.appendChild(li);

//         })

//     })

//     .catch(error => console.log('Error:',error));
// });


const fetchData = fetch("http://localhost:8085/products").then(response=>{
    // console.log(response);
    
    if (response.ok) {
        console.log("good");
    }
    return response.json();
}).then(data=>{
    console.log(data);
    
})

const button = document.querySelector("#loadProducts");
button.addEventListener("click",()=>{fetch("http://localhost:8085/products").then(response=>{
    // console.log(response);
    
    if (response.ok) {
        console.log("good");
    }
    return response.json();
}).then(data=>{
    console.log(data);
    
})

})
