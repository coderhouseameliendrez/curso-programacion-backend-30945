document.addEventListener("DOMContentLoaded", () => {

    let productListContainer = document.getElementById('lista');
    let inputName = document.getElementById('name');
    let inputPrice = document.getElementById('price');
    let inputSave = document.getElementById('saveProduct');

    inputSave.addEventListener('click', postProduct)

    getProducts();

    function getProducts() {
        fetch('/api/productos')
        .then(response => response.json())
        .then(data => {
            renderProducts(data.products)
        });
    }

    function postProduct(event) {
        event.preventDefault();

        let data = {
            name: inputName.value,
            price: inputPrice.value
        }

        fetch('/api/productos', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .catch(error => console.log("Error: ", error))
        .then(data => {
            renderProduct(data.product)
        })

    }

    function renderProducts(products) {
        products.forEach(product => {
            renderProduct(product);
        });
    }

    function renderProduct(product) {
        let tr = document.createElement('tr');

        let tdName = document.createElement('td');
        let tdPrice = document.createElement('td');

        tdName.innerHTML = product.name;
        tdPrice.innerHTML = product.price;

        tr.appendChild(tdName)
        tr.appendChild(tdPrice)

        productListContainer.appendChild(tr)        
    }

})