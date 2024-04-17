
 function comprar()
 { 
     let totalApagar = 0
     for (let index = 1; index <= 3; index++)  
     {
         const nombre = String(prompt("¿Qué producto desea llevar?"));
         const cantidad = Number(prompt("¿Cuántas unidades?"));
         const precio = Number(prompt("¿Cuánto sale cada unidad?"));
         const subtotal = cantidad * precio;
         totalApagar = totalApagar + subtotal;
     }
     return totalApagar;
}
const total1 = comprar();
const total2 = comprar();
const total3 = comprar();
const total = total1 + total2 + total3;

console.log(total);