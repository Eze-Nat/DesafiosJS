let opcion = mostrarMenu();
let dineroIngresado = 0;
let cantidadIngresada = 0;
let cantidadValida = true;
let dineroValido = true;


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
    let stock = Math.round(Math.random() * (999 - 1) + 1);
    if (opcion) {
        pedirCantidad(stock)
    } else {
        alert("opcion invalida")
    }
}


function pedirCantidad(numMin) {
    let cantidad;
    while (cantidadValida) {
        cantidadValida = false;
        cantidad = Number(prompt("Ingrese cantidad"));

        if (cantidad <= 0 || cantidad > numMin) {
            alert("Cantidad invalida");
            cantidadValida = true;
        } else {
            cantidadIngresada += cantidad;
            cantidadValida = false;
        }
    }

    let total = 0;

    if(opcion == 1){
      total = cantidad * 800;
    }else{
      total = cantidad * 1200;
    }

    alert("El total es " + total)

    venderProducto(total);
}


function venderProducto(total) {
    if (total) {
        pedirDinero(total)
    } else {
        alert("Opcion invalida")
    }
}

function pedirDinero(total) {
    let dinero;
    while (dineroValido) {
        dinero = Number(prompt("Ingrese un monto"));
        if (dinero < total) {
            alert("No tenes fondos suficientes");
            dineroValido = true;
        } else {
            dineroIngresado += dinero;
            dineroValido = false;
        }
    }

    alert("El total es " + total + ", ya se encuentra pago");
    alert("Su vuelto es " + (dineroIngresado - total));
}

