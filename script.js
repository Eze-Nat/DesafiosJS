class vino {
    constructor(id, nombre, descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
}

const vinos = [];

mostrarMenu();


function mostrarMenu() {
    let opcion = 0;

    while (opcion !== 5) {
        opcion = Number(prompt(`Seleccione una acción:
                           1. Agregar vino
                           2. Eliminar vino
                           3. Modificar vino
                           4. Listar vinos
                           5. Salir`));

        switch (opcion) {
            case 1: {
                agregarVino();
                break;
            }
            default: {
                alert("opcion inválida");
            }

        }

    }
}

function agregarVino() {
    let id = 1;
    if (vinos.length > 0) {
        id = vinos[vinos.length - 1].id + 1;
    }

    let nombre = prompt("ingrese un nombre");
    let descripcion = prompt("ingrese una descripcion");
    let vino = new vino(id, nombre, descripcion);

    vinos.push(vino);
}

console.log(vinos)

let stock = 0;
let miArray = [];
while (stock < 999) {
    let numero = Number(prompt("Ingrese un numero"));
    miArray.push(numero);
    contador++;
}
console.log(miArray);

let sumaStock = 0;
for(let i=0;i<miArray.length; i++){
    suma += miArray[i]
}

console.log("STOCK", suma)