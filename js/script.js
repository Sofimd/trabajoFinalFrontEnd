console.log("Hola")
let productos = [
    {
        nombre: "remera blanca 1",
        tieneDescuento: true;
        categoria: "lisa",
        sexo: "hombre"
    },

    {
        nombre: "remera gris 1",
        tieneDescuento: false,
        categoria: "lisa",
        sexo: "hombre"
    },

    {
        nombre: "remera negra 1",
        tieneDescuento: true,
        categoria: "lisa",
        sexo: "hombre"
    },

    {
        nombre: "remera verde 1",
        tieneDescuento: false,
        categoria: "lisa",
        sexo: "hombre"
    },

    {

        nombre: "remera blanca 2",
        tieneDescuento: true,
        categoria: "lisa",
        sexo: "mujer"
    },

    {
        nombre: "remera gris 2",
        tieneDescuento: false,
        categoria: "lisa",
        sexo: "mujer"
    },

    {
        nombre: "remera negra 2",
        tieneDescuento: true,
        categoria: "lisa",
        sexo: "mujer"
    },

    {
        nombre: "remera verde 2",
        tieneDescuento: false,
        categoria: "lisa",
        sexo: "mujer"
    },

    {
        nombre: "remera estampa 1",
        tieneDescuento: true,
        categoria: "estampada",
        sexo: "hombre"
    },

    {
        nombre: "remera estampa 2",
        tieneDescuento: false,
        categoria: "estampada",
        sexo: "mujer"
    }
] 

let todosLosProductos = document.getElementById("todosLosProductos");
for (let contador = 0; contador < productos.lenght;contador++) {
    todosLosProductos.innerHTML = todosLosProductos.innerHTML + "Producto" + (contador + 1) 
    + "- nombre: " + productos[contador].nombre + "- descuento: " + productos[contador].tieneDescuento + "<br>"; 
} 

/* for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];

    
    divProductos.insertAdjacentHTML("afterbegin",

        `
        <div class="producto">
            <img src=${producto.imagen}" alt="${producto.nombre}">
            <div class="producto-contenido">
                <h4>${producto.nombre}</h4>
                <span>Código: ${producto.id}</span>
                <span>Precio: $ ${producto.precio}</span>
                <button class="btn-comprar" type="button" data-id="${producto.id}">Comprar</button>
            </div>
        </div>
        `    
    );
}

*/