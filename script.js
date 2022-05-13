let contador=0;
let miArray= [];


while(contador<=5){
    let numero = Number(prompt("Ingrese Un Número"));
    miArray.push(numero);
    contador++;
}

let suma = 0;
for(let i=0; i<miArray.length;i++)
{
    suma += miArray[i]; // es igual a  ====>>>> suma = suma + miArray[i];
}

console.log(suma);

let multiplicacion=1;
for(let i=0;i<miArray.length;i++)
{
    multiplicacion *= miArray[i];
}

console.log(multiplicacion);

