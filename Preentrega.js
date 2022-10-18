//clase Ingrediente
class Ingrediente{
    constructor(nombre,precio){
    this.nombre=nombre;
    this.precio=precio;
    }
}

//clase Hamburgesa
class Hamburguesa{
    constructor(nombre,precio,Ingredientes){
        this.nombre=nombre;
        this.precio=precio;
        this.Ingredientes=Ingredientes;
    }
    sumaIva(){
        this.precio = this.precio * 1.21;
    }
    
}
const Carrito = {
    Hamburguesas:[],
    Totalcompra:0
}



//Instancias Ingredientes
const Quesocheddar = new Ingrediente ("Queso cheddar" , 50)
const Mayonesa = new Ingrediente ("Mayonesa" , 0)
const Aderezo = new Ingrediente ("Aderezo al forno" , 0)
const Panceta = new Ingrediente ("Panceta" , 100)
const Cebolla = new Ingrediente ("Cebolla" , 0)
const Tomate = new Ingrediente ("Tomate" , 0)
const Lechuga = new Ingrediente ("Lechuga" , 0)
const Ketchup = new Ingrediente ("Ketchup" , 0)
const Mostaza = new Ingrediente ("Mostaza" , 0)

//Instancias Hamburguesas
const American = new Hamburguesa ("American" ,800,[Quesocheddar,Lechuga,Tomate,Cebolla]);
const Mcforno = new Hamburguesa ("Mcforno" , 900, [Quesocheddar,Panceta]);
const Cuartodelibra = new Hamburguesa ("Cuarto de libra" ,700,[Quesocheddar,Cebolla,Ketchup,Mostaza]);
American.sumaIva();
Mcforno.sumaIva();
Cuartodelibra.sumaIva();

//listado de hamburguesas
const listadeHamburguesas = [American,Mcforno,Cuartodelibra];
const listadeIngredientes=[Quesocheddar,Mayonesa,Aderezo,Panceta,Cebolla,Tomate,Lechuga,Ketchup,Mostaza]

let total = 0;
let opcion;
let listaHamburguesas1 = "";
let listadeIngredientes1 = "";

listaHamburguesas1 = CrearlistaNombres(listadeHamburguesas);



do{
    opcion=prompt("Ingresa el producto que deseas comprar o escribe no para salir\n"+listaHamburguesas1);
}while( opcion != "American" && opcion != "Mcforno" && opcion != "Cuarto de libra" && opcion != "no");

while (opcion != "no"){
    switch (opcion) {
        case "American":
            Carrito.Hamburguesas.push(American);
            Carrito.Totalcompra = Calculartotal(Carrito.Hamburguesas);
            alert("El costo de tu producto es: $" + American.precio + "\nIngredientes:\n"+CrearlistaNombres(American.Ingredientes)+Carrito.Totalcompra);
            break;
        case "Mcforno":
            alert("El costo de tu producto es: " + Mcforno.precio +"\nIngredientes:\n"+CrearlistaNombres(Mcforno.Ingredientes));
            break;
        case "Cuarto de libra":
            alert("El costo de tu producto es: " + Cuartodelibra.precio +"\nIngredientes:\n"+CrearlistaNombres(Cuartodelibra.Ingredientes) );
			
            break;
        default:
            alert("En estos momentos no contamos con ese producto");
            break;
    } 
    opcion = prompt("Si deseas comprar otro producto ingresalo o escribe no para salir\n" + listaHamburguesas1);    
}

//Funciones
function Calculartotal(arreglo){
    let Total
    for (const Elemento of arreglo){
    
        Total += Elemento.precio
    }
    return Total;
}
function CrearlistaNombres(arreglo){
    let lista = ""
    for (const Elemento of arreglo){
    
        lista += `${Elemento.nombre}\n`
    }
    return lista;
}

