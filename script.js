class Stock {

    constructor(id,nombre,precio,)
    {
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
    }
    }
    const vino1 = new Stock(1, "Galileo Blend Tinto", 950);
    const vino2 = new Stock(2, "Pragmatico Malbec", 820);
    const vino3 = new Stock(3, "Pragmatico Rosado", 650);
    const vino4 = new Stock(4, "Ejes Malbec", 500);
    const vino5 = new Stock(5, "Ejes Cabernet", 500);
    
    
    const vinos = [vino1, vino2, vino3, vino4, vino5];
    
    console.log(vinos);