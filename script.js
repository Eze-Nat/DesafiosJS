let opcion = mostrarMenu();
let dineroIngresado = 0;
let cantidadIngresada = 0;

if (opcion != 3) {
    cantidadProducto(opcion);
} else {
    alert("GRACIAS");
}


function mostrarMenu() {
    return prompt(`Seleccione un producto: 
                     1. Vinos ($800)
                     2. Quesos ($ 1200)
                     3. Salir`);

}

function cantidadProducto(opcion) {
    if (opcion == 1) {
        pedirCantidad()
    } else if (opcion == 2) {
        pedirCantidad()
    } else {
        alert("opcion invalida")
    }
}


function pedirCantidad(numMin) {
    while (cantidadIngresada < numMin) {
        let cantidad = Number(prompt("Ingrese cantidad"));

        if (cantidad !== 0) {
            alert("Cantidad invalida")
        } else {
            cantidadIngresada += cantidad;
        }
    }
    function resultado(pedirCantidad)
    {
        return cantidad * 800;
        return cantidad * 1200;    }
    }
    


function venderProducto(opcion) {
    if (opcion == 1) {
        pedirDinero(resultado)
    } else if (opcion == 2) {
        pedirDinero(resultado)
    } else {
        alert("opcion invalida")
    }
}

function pedirDinero(numMin) {
    while (dineroIngresado < numMin) {
        let dinero = Number(prompt("Ingrese un monto"));

        if (dinero !== resultado) {
            alert("monto invalido")
        } else {
            dineroIngresado += dinero;
        }
    }

}

