/*EJERCICIO 1*/
const totalCompra = [5,14,12,58,21]
const totalCompraconIVA = totalCompra.map(function(precio){
    return (Math.round(precio*1.21*100)/100);
});

console.log(totalCompraconIVA);

/*EJERCICIO 2*/
const ciudades = ["Madrid", "Málaga", "Barcelona", "Salamanca"];
const filtrar = ciudades.filter(function(elemento){
    return elemento.includes("M") || elemento.includes("m");
});
console.log(filtrar);

/*EJERCICIO 3*/
const notas = [5.4,7,4.8,9.1,10,7.6]
const mediaNotas = notas.reduce(function(primeraNota, segundaNota){
    return (primeraNota + segundaNota);
});

console.log("La media de las notas es de " + Math.round(mediaNotas/notas.length*100)/100);

/*EJERCICIO 4*/
const filtrar2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((acc, index) => acc + index);
console.log("La Suma de los Números es: "+filtrar2);
function recurrir(inicio, fin){
    if (inicio == fin) {
        console.log(fin)
        return;
    } else {
        console.log(inicio)
        return recurrir(inicio+1, fin)
    }
}
recurrir(1, 10);

const numeros = [10, 23, 14, 1];
const filtrar2_1 = numeros.reduce(function(primero, segundo, tercero){
    return primero+segundo+tercero;
});
console.log("Suma "+filtrar2_1);

function filtrar2_2(primero){
    return function(segundo){
        return primero+segundo;
    }
}
let suma50 = filtrar2_2(50);
console.log("Total "+suma50(10));

/*EJERCICIO 5*/
const nombreAlumno = "Juan";
const nuevoNombre = "juan.campus";

console.log(nombreAlumno + " - " + nuevoNombre);

