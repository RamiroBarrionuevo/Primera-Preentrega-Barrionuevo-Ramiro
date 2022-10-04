
//PRODUCTOS
const Mcforno = 800;
const American = 700;
const Cuartodelibra = 600;
const Veggie = 500;
//COSTO ENVIO
const precioMuvi = 350;
const preciootrobarrio = 300;

let total = 0;
let opcion;
//CONDICIONALES

do {
    opcion = prompt("Ingresá el producto que deseas comprar o NO para salir" + mostrarOpcionesMenu());
} while (opcion != "NO" && opcion != "Mcforno" && opcion != "American" && opcion != "Cuarto de libra" && opcion != "Veggie");

while (opcion != "No"){
if (total != 0){
	opcion = prompt("Si deseas comprar otro producto ingresalo o escribe No para salir" + mostrarOpcionesMenu());
}
    switch (opcion) {
        case "Mcforno":
            alert("El costo de tu producto es: " + "$" + Mcforno);
			total = acumularPrecioProducto(total, Mcforno);
            break;
        case "American":
            alert("El costo de tu producto es: " + "$" + American);
			total = acumularPrecioProducto(total, American);
            break;
        case "Cuarto de libra":
            alert("El costo de tu producto es: " + "$" + Cuartodelibra);
			total = acumularPrecioProducto(total, Cuartodelibra);
            break;
        case "Veggie":
            alert("El costo de tu producto es: " + "$" + Veggie);
			total = acumularPrecioProducto(total, Veggie);
            break;
        default:
            alert("En estos momentos no contamos con ese producto");
            break;
    }      
}

if(total != 0){
	opcion = prompt("Para calcular el costo de tu envio escribe MUVI para indicar que eres del Muvi o otro si eres de otro barrio");
	total = calcularTotalConEnvio(total, opcion);
	alert("El total de tu compra + envío es de: " + total);
}else {
	alert("Gracias por utilizar el programa");
}

//FUNCIONES
function mostrarOpcionesMenu(){
	return "\nProductos disponibles:\nMcforno\nAmerican\nCuarto de libra\nVeggie";
}

function acumularPrecioProducto(totalProductos, precioProducto){
	return totalProductos + precioProducto;	
}

function calcularTotalConEnvio(totalConEnvio, opcion){
	if(opcion === "MUVI"){
		return acumularPrecioProducto(totalConEnvio, precioMuvi);
	}
	else {
		return acumularPrecioProducto(totalConEnvio, preciootrobarrio);
	}
}