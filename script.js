let opcion = mostrarMenu();
let opcion1 = 0;

let dineroIngresado = 0;
let cantidadIngresada = 0;
let cantidadValida = true;
let dineroValido = true;



class Vino {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.precio = parseInt(precio);
    }
}

const vino1 = new Vino(1, "Galileo Blend Tinto", 950);
const vino2 = new Vino(2, "Pragmatico Malbec", 820);
const vino3 = new Vino(3, "Ejes Malbec", 500);
const vino4 = new Vino(4, "Casa Araujo Cask Malbec", 850);
const vino5 = new Vino(5, "Nucha Malbec Organico", 950);
const vino6 = new Vino(6, "Septima Malbec", 750);

const vinos = [vino1, vino2, vino3, vino4, vino5, vino6];

class Queso {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.precio = parseInt(precio);
    }
}

const queso1 = new Queso(1, "Sardo", 2500);
const queso2 = new Queso(2, "Cremoso", 2200);
const queso3 = new Queso(3, "Por Salud", 2000);
const queso4 = new Queso(4, "Magro", 2500);
const queso5 = new Queso(5, "Pategras", 2500);
const queso6 = new Queso(6, "Criollo", 2500);

const quesos = [queso1, queso2, queso3, queso4, queso5, queso6];

console.log('aca: ' + opcion);

if (opcion == 1) {
    listarVinos(opcion);
} else if (opcion == 2) {
    listarQuesos(opcion);
} else {
    alert("GRACIAS");
}


if (opcion != 3) {
    cantidadProducto(opcion, opcion1);
} else {
    alert("GRACIAS");
}




function mostrarMenu() {
    return prompt(`Seleccione un producto: 
                     1. Vinos
                     2. Quesos
                     3. Salir`);

}

function mostrarMenu1() {

    let vinosDesc = "";
    vinos.forEach(vino => {
        vinosDesc = vinosDesc + "Vino: " + vino.id + " Nombre: " + vino.nombre + " Precio: " + vino.precio + "\n";
    });
    return prompt("Elija una opcion: \n" + vinosDesc);

}


function mostrarMenu2() {

    let quesosDesc = "";
    quesos.forEach(queso => {
        quesosDesc = quesosDesc + "Queso: " + queso.id + " Nombre: " + queso.nombre + " Precio: " + queso.precio + "\n";
    });
    return prompt("Elija una opcion: \n" + quesosDesc);

}

function listarVinos(opcion) {
    if (opcion) {
        opcion1 = mostrarMenu1();
    }
}

function listarQuesos(opcion) {
    if (opcion) {
        opcion1 = mostrarMenu2();
    }
}

function cantidadProducto(opcion, opcion1) {
    let stock = 999;
    if (opcion1) {
        pedirCantidad(stock);
    } else {
        alert("opcion invalida");
    }
}


function pedirCantidad(numMin) {
    let cantidad;
    console.log(opcion + " " + opcion1);
    while (cantidadValida) {
        cantidadValida = false;
        if (opcion == 1) { //vinos
            cantidad = Number(prompt("Ingrese cantidad de " + vinos[opcion1 - 1].nombre));
        } else {
            cantidad = Number(prompt("Ingrese cantidad de " + quesos[opcion1 - 1].nombre));
        }



        if (cantidad <= 0 || cantidad > numMin) {
            alert("Cantidad invalida");
            cantidadValida = true;
        } else {
            cantidadIngresada += cantidad;
            cantidadValida = false;
        }
    }

    let total = 0;

    if (opcion == 1) { //vinos
        total = cantidad * vinos[opcion1 - 1].precio;
    } else {
        total = cantidad * quesos[opcion1 - 1].precio;
    }

    alert("El total es " + total);

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