let opcion = mostrarMenu();
let opcion1 = mostrarMenu1();
let opcion2 = mostrarMenu2();
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

const vino1 = new Vino(1, "Galileo Blend Tinto", "950");
const vino2 = new Vino(2, "Pragmatico Malbec", "820");
const vino3 = new Vino(3, "Ejes Malbec", "500");
const vino4 = new Vino(4, "Casa Araujo Cask Malbec", "850");
const vino5 = new Vino(5, "Nucha Malbec Organico", "950");
const vino6 = new Vino(6, "Septima Malbec", "750");

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


if (opcion == 1) {
    listarVinos(opcion);
} else if (opcion == 2) {
    listarQuesos(opcion)
} else {
    alert("GRACIAS");
}


function mostrarMenu() {
    return prompt(`Seleccione un producto: 
                     1. Vinos
                     2. Quesos
                     3. Salir`);

}

switch (opcion) {
    case 1: {
        listarVinos()
    }
    case 3: {
        listarQuesos()
    }
    default: {
        alert("opcion inválida");
        break;
    }
}

if (opcion1 == 1) {
    vino1(opcion1);
} else if (opcion1 == 2) {
    vino2(opcion1)
} else if (opcion1 == 3) {
    vino3(opcion1)
} else if (opcion1 == 4) {
    vino4(opcion1)
} else if (opcion1 == 5) {
    vino5(opcion1)
} else if (opcion1 == 6) {
    vino6(opcion1)
} else 
{
    alert("GRACIAS");
}

function mostrarMenu1() {
    return prompt(`"Elija una opcion" ${Vino}`);

}

if (opcion2 == 1) {
    queso1(opcion2);
} else if (opcion2 == 2) {
    queso2(opcion2)
} else if (opcion2 == 3) {
    queso3(opcion2)
} else if (opcion2 == 4) {
    queso4(opcion2)
} else if (opcion2 == 5) {
    queso5(opcion2)
} else if (opcion2 == 6) {
    queso6(opcion2)
} else 
{
    alert("GRACIAS");
}

function mostrarMenu2() {
    return prompt(`"Elija una opcion" ${Queso}`);

}
function listarVinos(opcion) {
    let listaVinos; {
        if (opcion) {
            mostrarMenu1(opcion)
        }
    }
}

function listarQuesos(opcion) {
    let listarQuesos; {
        if (opcion) {
            mostrarMenu2(opcion)
        }
    }
}

function cantidadProducto(opcion1) {
    let stock = 999;
    if (opcion1) {
        pedirCantidad(stock)
    } else {
        alert("opcion invalida")
    }
}
function cantidadProducto(opcion2) {
    let stock = 999;
    if (opcion2) {
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

    if (opcion == id) {
        total = cantidad * precio;
    } else {
        total = cantidad * precio;
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