let fecha = Number(prompt(`INGRESE SU AÑO DE NACIMIENTO`));

if (fecha <= 2004)  

{
    let nombre = prompt("Ingresa su nombre");
    let apellido = prompt("Ingresa su apellido");

    nombre = nombre.toUpperCase();
    apellido = apellido.toUpperCase();

    alert(`Bienvenido `+nombre+" "+apellido)
}

else
{
    alert(`No sos mayor de edad`);
}

