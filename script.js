let contador;
contador = 1;

while (contador<5){
    let dato = prompt(`Introduce un numero del 1 al 10`);
    let num = parseInt(dato);

    alert(`El numero introducido es ${num}`);
    alert(`El contador es ${contador}`);

    contador = contador+1;
}

let ingresarPasos = parseInt(prompt("Ingresar cantidad de pasos"));
for (let i = 1; i <= 10; i++) {
    let resultado = ingresarPasos + i ;
    alert("Metros recorridos a cada paso: " + resultado);
}

