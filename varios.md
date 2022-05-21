class Vino{  //Usuario
    constructor(id,nombre,precio) //apellido=precio
    {
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
    }
}

const vino1 = new Vino(1, "Galileo Blend Tinto", "950");      //usuario = vino
const vino2 = new Vino(2, "Pragmatico Malbec", "820");
const vino3 = new Vino(3, "Ejes Malbec", "500");
const vino4 = new Vino(4, "Casa Araujo Cask Malbec", "850");
const vino5 = new Vino(5, "Nucha Malbec Organico", "950");
const vino6 = new Vino(6, "Septima Malbec", "750");

const vinos = [vino1, vino2, vino3, vino4, vino5, vino6]; //usuarios = vinos
console.log("INICIAL:", vinos);

mostrarMenu();


function mostrarMenu()
{
   let opcion = 0;
   
   while(opcion!==10)
   {
       opcion = Number( prompt(`Seleccione una acción:
                           1. Agregar Vino
                           2. Eliminar Vino
                           3. Modificar Vino
                           4. Listar Vinos
                           5. Buscar Vino
                           6. Listar Vino + Precio
                           10. Salir`));

   switch(opcion)
   {
       case 1:
       {
           agregarVinos();
           break;
       }
       case 2: 
       {
           eliminarVinos();
       }
       case 3: 
       {
           modificarVinos();
       }
       case 4:
       {
           listarVinos();
           break;
       }
       case 5:
       {
               buscarVinos();
               break;
       }
       case 6:
       {
               listarNombreMasPrecio();
               break;
       }
       default:{
           alert("opcion inválida");
           break;
       }
      
   }

   }
}

function agregarVinos()
{      
    let id=1;
    if(vinos.length>0)
    {
       id=vinos[vinos.length-1].id+1;
    }
    
    let nombre=prompt("Ingrese Nombre del Vino");
    let precio = prompt("Ingrese Un Valor");
    let vino = new Vinos(id, nombre, precio);

    vinos.push(vino);
}


function listarVinos()
{
   console.log("Listar Vinos")

   vinos.forEach(
       (vino)=>{
           
           console.log(vino.id+" "+vino.nombre+" "+vino.apellido);

       }
   );


}

function eliminarVino(){

   let id= Number(prompt("Ingrese el id del vino que quiere eliminar"));

   let encontrado = vino.find((vino)=>vino.id===id);

  if(!encontrado)
  {
      alert("Vino no Encontrado");
  }
  else{

       let index = vinos.indexOf(encontrado);

       vinos.splice(index,1);

       console.log("Borrar vino");
       console.log(vinos);

  }
   

}

function buscarVino()
{
   let nombre = prompt("Ingresa el vino que quieres buscar");

   let encontrados = vinos.filter((vino)=>vino.nombre.toLowerCase().indexOf(vino.toLocaleLowerCase())!==-1);

   console.log("Buscar Vinos:", encontrados);

}


function modificarUsuario()
{
   let id= Number(prompt("Ingrese el id del vino que quiere modificar"));

   let existe = vinos.some((vino)=>vino.id===id);

   if(existe)
   {
       let encontrado = vinos.find((vino)=>vino.id===id);
       let nuevoNombre = prompt("Ingrese el nuevo nombre");
       let nuevoPrecio = prompt("Ingrese el nuevo precio");

       encontrado.nombre = nuevoNombre;
       encontrado.precio = nuevoPrecio;

       console.log("MODIFICACION")
       console.log(vinos);
   }
   else
   {
       alert("Vino no econtrado")
   }

}


function listarNombreMasPrecio()
{
   let nombresYPrecios = vinos.map(
       (vino)=>vino.precio+ " " + vino.nombre);

   console.log("MAP:");
   console.log(nombresYPrecios);

}