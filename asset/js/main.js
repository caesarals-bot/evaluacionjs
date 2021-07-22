//variables globales
const inputRut = document.querySelector("#rut");
const inputNombre = document.querySelector("#nombre");
const inputFecha = document.querySelector("#fecha");
const inputRegiones = document.querySelector("#region");
const inputPrecio = document.querySelector("#precio");
//boton
const btnAgregar = document.querySelector("#agregar");
//arreglo que llena la lista de ventas
let listaVentas = [];
//se agrega evento al boton
btnAgregar.addEventListener("click", crearVenta);

//funcion constructora
function Venta() {
    this.rut = "";
    this.nombre = "";
    this.fecha = "";
    this.region = "";
    this.precio = 0;
}

//funcion que agrega una nueva venta
function crearVenta() {
    //variable que instancia una Venta
    let venta = new Venta();
    //se recogen los valores ingresados en el formulario
    venta.rut = inputRut.value;
    venta.nombre = inputNombre.value;
    venta.fecha = inputFecha.value;
    venta.region = inputRegiones.value;
    venta.precio = inputPrecio.value;
    //se llena la lista de productos
    listaVentas.push(venta);
    //se imprime la venta en la tabla
    imprimirVentas();
    limpiaFormulario();

    contarVentas();
}

//funcion que itera los registros contenidos en el arreglo listaVentas y las muestra en la tabla
function imprimirVentas() {
    //variable que arma la fila con sus columnas para mostrar en la tabla 
    let html = "";

    /*iterar sobre el arreglo*/
    let idVenta = 0;

    for (let i = 0; i < listaVentas.length; i++) {
        idVenta += 1;
        html += "<tr> <td>" + idVenta + "</td> <td>" + listaVentas[i].rut + "</td> <td>" + listaVentas[i].nombre + "</td> <td>" + listaVentas[i].fecha + "</td> <td>" + listaVentas[i].region + "</td> </tr>";
    }

    //se envian la fila con sus columnas para mostrar en la tabla 
    imprime.innerHTML = html;
}

//funcion que limpia el formulario
function limpiaFormulario() {
    inputRut.value = "";
    inputNombre.value = "";
    inputFecha.value = "";
    inputRegiones.value = "";
    inputPrecio.value = "";
}

//funcion calcula la cantidad de ventas dentro del arreglo 
function contarVentas() {
    let contador = 0;
    for (let i = 0; i < listaVentas.length; i++) {
        contador += 1;
    }
    console.log("Cantidad de ventas: " + contador);
}


