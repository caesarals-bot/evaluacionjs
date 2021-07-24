const formulario = document.getElementById('formulario');
const inputRut = document.querySelector("#rut");
const inputNombre = document.querySelector("#nombre");
const inputFecha = document.querySelector("#fecha");
const inputRegiones = document.querySelector("#region");
const inputPrecio = document.querySelector("#precio");
const verCantidadVentas = document.querySelector('#card-uno');
const valorTotalVentas = document.querySelector('#card-dos');
//boton
const btnAgregar = document.querySelector("#agregar");

let total = 0;
//arreglo que llena la lista de ventas
let listaVentas = [];
//se agrega evento al boton
btnAgregar.addEventListener("click", (e) => {
    e.preventDefault();


    verificarEnvioFormulario()

    verificandoPrecio(inputPrecio.value)

    verificarEnvioFormulario() && verificandoPrecio(inputPrecio.value) ? crearVenta(): false;


    

});

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
    venta.precio = parseInt(inputPrecio.value);
    //se llena la lista de productos
    listaVentas.push(venta);
    //se imprime la venta en la tabla
   
    
    imprimirVentas();

    contarVentas();

    imprimirTotalVentas();

    imprimirValorTotalVentas();
     
    limpiaFormulario();
    
}

//funcion que itera los registros contenidos en el arreglo listaVentas y las muestra en la tabla
function imprimirVentas() {
    //variable que arma la fila con sus columnas para mostrar en la tabla 
    let html = "";

    /*iterar sobre el arreglo*/
    let idVenta = 0;
    total = 0;

    

    for (let i = 0; i < listaVentas.length; i++) {
        idVenta += 1;
        html += "<tr> <td>" + idVenta + "</td> <td>" + listaVentas[i].rut + "</td> <td>" + listaVentas[i].nombre + "</td> <td>" + listaVentas[i].fecha + "</td> <td>" + listaVentas[i].region + "</td> </tr>";

        sumarVentas(listaVentas[i].precio)
        
    }

    //se envian la fila con sus columnas para mostrar en la tabla 
    imprime.innerHTML = html;


}
function imprimirTotalVentas(){
    verCantidadVentas.innerHTML=`
        <h5 class="card-title text-white">Cantidad de ventas</h5>
        <p class="card-text text-center text-white">${contarVentas()}</p>
    `
}
function imprimirValorTotalVentas(){
    
    valorTotalVentas.innerHTML=`
        <h5 class="card-title text-white">Cantidad de ventas</h5>
        <p class="card-text text-center text-white">$ ${total}</p>
    `
}

//funcion verificar el envio del formulario

function verificandoPrecio(precio) {
    if(isNaN(precio) || precio <= 0 ){
        console.error('ingrese un numero mayor a 0');
        return false;
    }
    return true;
}
    
    
    


function verificarEnvioFormulario(){
    
    if(inputRut.value && inputNombre && inputFecha && inputRegiones && inputPrecio  ){
        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');

        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 3000)
        return true;
        }else{
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');;
        }, 3000)
            return false;
        
        }
            
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
const contarVentas = () => listaVentas.length;

//funcion que suma el total de ventas
const sumarVentas = ( num = 0) => total += num;




 


/*
function mostrarAlerta(mensaje, tipo) {

    // Si hay una alerta previa, entonces no crear otra
    const alertaPrevia = document.querySelector('.alerta');
    if(alertaPrevia) {
        return;
    }

    const alerta = document.createElement('DIV');
    alerta.textContent = mensaje;
    alerta.classList.add('alerta');

    if(tipo === 'error') {
        alerta.classList.add('error');
    }

    // Insertar en el HTML
    const formulario = document.querySelector('.formulario');
    formulario.appendChild( alerta );

    // Eliminar la alerta después de 3 segundos
    setTimeout(() => {
        alerta.remove();
    }, 3000);
} 
*/
