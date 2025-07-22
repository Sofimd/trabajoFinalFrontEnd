console.log("Hola")


const productos = [
    {
        id: "01",
        nombre: "remera blanca hombre",
        imagen: "imagenes/remeraHobreBlanca.jpg",
        precio: 10000

    },

    {
        id: "02",
        nombre: "remera gris hombre",
        imagen: "imagenes/remeraHombreGris.jpg",
        precio: 12000

    },

    {
        id: "03",
        nombre: "remera negra hombre",
        imagen: "imagenes/remeraHombreNegra.jpg",
        precio: 10000

    },

    {
        id: "04",
        nombre: "remera verde hombre",
        imagen: "imagenes/remeraHombreVerde.jpg",
        precio: 12000
    },

    {
        id: "05",
        nombre: "remera blanca mujer",
        imagen: "imagenes/remeraMujerBlanca.jpg",
        precio: 10000
    },

    {
        id: "06",
        nombre: "remera gris mujer",
        imagen: "imagenes/remeraMujerGris.jpg",
        precio: 12000
    },

    {
        id: "07",
        nombre: "remera negra mujer",
        imagen: "imagenes/remeraMujerNegra.jpg",
        precio: 10000
    },

    {
        id: "08",
        nombre: "remera verde mujer",
        imagen: "imagenes/remeraMujerVerde.jpg",
        precio: 12000
    },

    {
        id: "09",
        nombre: "remera estampada 1",
        imagen: "imagenes/remeraHombreEstampa1.webp",
        precio: 15000
    },

    {
        id: "10",
        nombre: "remera estampada 2",
        imagen: "imagenes/remeraMujerEstampa.webp",
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
                
                <div class="contenedorCategoria">
                 <img src="${producto.imagen}" alt="${producto.nombre}">
                    <h4>${producto.nombre}</h4>
                    <span>Código: ${producto.id}</span>
                    <span>Precio: $ ${producto.precio}</span>
                    <button class="botonComprar" type="button" data-id="${producto.id}">Comprar</button>
                </div>
            </div>
            `
        );
    }
    
    divProductos.addEventListener("click",manejarClicComprar);
}

// Función de comparación para ordenar productos por ID de forma ascendente.
// Para usar con sort
function compararProductosPorIdAscendente(a, b) {
    if(a.id < b.id) {
        return 1;
    }
    if(a.id > b.id) {
        return -1;
    }
    return 0;
}

productos.sort(compararProductosPorIdAscendente);

// Array carrito
let carrito = [];

 
function agregarProductoAlCarrito(idProducto) {
        let productoEnCarrito = null;
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].id === idProducto) {
            productoEnCarrito = carrito[i];
            break; 
        }
    }

    if (productoEnCarrito) {
             productoEnCarrito.cantidad++;
    } else {
        
        let productoOriginal = null;
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].id === idProducto) {
                productoOriginal = productos[i];
                break; // Salir del bucle
            }
        }        
        

        carrito.push({ ...productoOriginal, cantidad: 1 });
    }
    actualizarCarritoHTML(); // Actualizar la vista del carrito
}

// Evento de clic en los botones "Comprar"
function manejarClicComprar(evento) {    
    const productoId = evento.target.dataset.id;
    agregarProductoAlCarrito(productoId);    
}

// Agrega los productos del array productos
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

    // Delegación de eventos para los botones "Comprar"
    divProductos.addEventListener("click", manejarClicComprar); //handler
}

// Maneja el evento de clic en los botones de cantidad y eliminar del carrito
function manejarClicCarrito(evento) {
    const target = evento.target;

    if (target.classList.contains("btn-cantidad") || target.classList.contains("btn-eliminar")) {
        const productoId = target.dataset.id;
        const accion = target.dataset.action;

        if (accion === "eliminar") {
            eliminarProductoDelCarrito(productoId);
        } else if (accion === "restar") {
            restarCantidadProducto(productoId);
        } else if (accion === "sumar") {
            sumarCantidadProducto(productoId);
        }
    }
}

// Actualiza el contenido HTML del carrito de compras basado en el array 'carrito'.
function actualizarCarritoHTML() {
    const carritoCompras = document.querySelector(".carritoCompras");

    if (!carritoCompras) {
        console.error("Error: No se encontró el contenedor con la clase 'CarritoCompras'. Asegúrate de que exista en tu HTML.");
        return;
    }

    // Limpiar el contenido actual del carrito y recrear la estructura base
    carritoCompras.innerHTML = `
        <h2>Tu Carrito de Compras</h2>
        <ul class="lista-carrito"></ul>
        <p class="total-carrito"></p>
        <p class="cantidad-carrito"></p>
    `;
    
    const listaCarrito = carritoCompras.querySelector(".lista-carrito");
    let totalPagar = 0;
    let cantidadProductosUnicos = 0;

    // Verificar si el carrito está vacío
    if (carrito.length === 0) {
        listaCarrito.innerHTML = "<p>El carrito está vacío.</p>";
    } else {
        for (let i = 0; i < carrito.length; i++) {
            const item = carrito[i];
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${item.nombre} - $${item.precio} x ${item.cantidad}</span>
                <div>
                    <button class="btn-cantidad" data-id="${item.id}" data-action="restar">-</button>
                    <button class="btn-cantidad" data-id="${item.id}" data-action="sumar">+</button>
                    <button class="btn-eliminar" data-id="${item.id}" data-action="eliminar">x</button>
                </div>
            `;
            listaCarrito.appendChild(li);
            totalPagar += item.precio * item.cantidad;
            cantidadProductosUnicos++;
        }
    }

    // Total y cantidad de productos
    carritoCompras.querySelector(".total-carrito").textContent = `Total a pagar: $${totalPagar}`;
    carritoCompras.querySelector(".cantidad-carrito").textContent = `Productos en carrito: ${cantidadProductosUnicos}`;

    // Configuracion Event Listener 
    const nuevoListaCarrito = carritoCompras.querySelector(".lista-carrito");
    nuevoListaCarrito.addEventListener("click", manejarClicCarrito);
}

// Suma una unidad.
function sumarCantidadProducto(idProducto) {
    let productoEnCarrito = null;

    // Buscar el producto en el carrito
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].id === idProducto) {
            productoEnCarrito = carrito[i];
            break;
        }
    }

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
        actualizarCarritoHTML(); 
    }
}

// Resta una unidad a la cantidad de un producto en el carrito.
function restarCantidadProducto(idProducto) {
    let productoEnCarrito = null;
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].id === idProducto) {
            productoEnCarrito = carrito[i];
            break;
        }
    }

    if (productoEnCarrito) {
        productoEnCarrito.cantidad--;
        if (productoEnCarrito.cantidad <= 0) {
            eliminarProductoDelCarrito(idProducto);
        } else {
            actualizarCarritoHTML(); 
        }
    }
}

// Eliminar producto del carrito
function eliminarProductoDelCarrito(idProducto) {
    const nuevoCarrito = [];
    for (let i = 0; i < carrito.length; i++) {
        // Buscar elementos a eliminar
        if (carrito[i].id !== idProducto) {
            nuevoCarrito.push(carrito[i]);
        }
    }
    carrito = nuevoCarrito;
    actualizarCarritoHTML();
}

agregarProductos();
actualizarCarritoHTML(); 
