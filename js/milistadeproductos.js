
const container_padre = document.getElementById('container_padre');

let products = [
    {name:"heladera", precio:2323,stock: 10},
    {name:"teclado", precio:2323,stock: 8},
    {name:"teclado", precio:2323,stock: 8},
    {name:"teclado", precio:2323,stock: 8},
    {name:"teclado", precio:2323,stock: 8},
    {name:"teclado", precio:2323,stock: 8},
    {name:"teclado", precio:2323,stock: 8},
    {name:"teclado", precio:2323,stock: 8},
    {name:"teclado", precio:2323,stock: 8},
    {name:"teclado", precio:2323,stock: 8},
    {name:"teclado", precio:2323,stock: 8},
    {name:"teclado", precio:2323,stock: 8},
    {name:"teclado", precio:2323,stock: 8},
    {name:"teclado", precio:2323,stock: 8},
    {name:"teclado", precio:2323,stock: 8},
    
]



for (let index = 0; index < products.length; index++) {
    const element = products[index];
    let div = document.createElement("div");
    div.classList.add('border')
    div.innerHTML = `
        <div class="ancho">
            <p>NOMBRE : ${element.name}</p>
            <p>PRECIO: ${element.precio}</p>
            <p>STOCK: ${element.stock}</p>
            <a href="">Comprar</a>
        </div>
    `
    container_padre.appendChild(div)
}