/* function calcularvelocidad(){
    const distancia = 10
    const tiempo = 2
    const velocidad = distancia/tiempo;
    console.log("La velocidad del movil es " + velocidad);
}

calcularvelocidad();

function calcularvelocidad(distancia, tiempo) {
    // const distancia = 10
    // const tiempo = 2
    const velocidad = distancia / tiempo;
    console.log("La velocidad del movil es " + velocidad);
}

calcularvelocidad(10,2);
calcularvelocidad(100,2);
calcularvelocidad(75,3);

const calcularvelocidad = (distancia, tiempo) => {
    const velocidad = distancia / tiempo;
    console.log("La velocidad del movil es " + velocidad);
    return velocidad
}
const velocidad1 = calcularvelocidad(10,2);
console.log("La velocidad de Juana es " + velocidad1);
*/

const comprar = ()=> {
    let totalApagar = 0;
    for (let index = 1; index <= 3; index++)  {
 const nombre =prompt("¿Qué producto desea llevar?");
 const cantidad = Number(prompt("¿Cuántas unidades?"));
 const precio = Number(prompt("¿Cuánto sale cada unidad?"));
 const subtotal = cantidad * precio;
 totalApagar = totalApagar + subtotal;
    }
    console.log(totalApagar);
    return totalApagar;
 }
 const total = comprar() + comprar() + comprar();

