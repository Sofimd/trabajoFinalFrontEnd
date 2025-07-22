console.log("Hola")


const productos = [
    {
        id: "01",
        nombre: "remera blanca 1",
        imagen: "imagenes/remeraHombreBlanca.jpg",
        categoria: "hombre",
        precio: 10000

    },

    {
        id: "02",
        nombre: "remera gris 1",
        imagen: "imagenes/remeraHombreGris.jpg",
        categoria: "hombre",
        precio: 12000

    },

    {
        id: "03",
        nombre: "remera negra 1",
        imagen: "imagenes/remeraHombreNegra.jpg",
        categoria: "hombre",
        precio: 10000

    },

    {
        id: "04",
        nombre: "remera verde 1",
        imagen: "imagenes/remeraHombreVerde.jpg",
        categoria: "hombre",
        precio: 12000
    },

    {
        id: "05",
        nombre: "remera blanca 2",
        imagen: "imagenes/remeraMujerBlanca.jpg",
        categoria: "mujer",
        precio: 10000
    },

    {
        id: "06",
        nombre: "remera gris 2",
        imagen: "imagenes/remeraMujerGris.jpg",
        categoria: "mujer",
        precio: 12000
    },

    {
        id: "07",
        nombre: "remera negra 2",
        imagen: "imagenes/remeraMujerNegra.jpg",
        categoria: "mujer",
        precio: 10000
    },

    {
        id: "08",
        nombre: "remera verde 2",
        imagen: "imagenes/remeraMujerVerde.jpg",
        categoria: "mujer",
        precio: 12000
    },

    {
        id: "09",
        nombre: "remera estampa 1",
        imagen: "imagenes/remeraHombreEstampa1.webp",
        categoria: "unisex",
        precio: 15000
    },

    {
        id: "10",
        nombre: "remera estampa 2",
        imagen: "imagenes/remeraMujerEstampa.webp",
        categoria: "unisex",
        precio: 15000
    },
];

function agregarProductos() {
    const divProductos = document.querySelector(".productos");

    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];

        divProductos.insertAdjacentHTML("afterbegin",
            `
            <div class="producto">
                <img src="${producto.imagen}" alt="${producto.nombre}">
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
}
