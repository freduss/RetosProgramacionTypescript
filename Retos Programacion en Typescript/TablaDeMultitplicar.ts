/*
 * Crea un programa que sea capaz de solicitarte un número y se
 * encargue de imprimir su tabla de multiplicar entre el 1 y el 10.
 * - Debe visualizarse qué operación se realiza y su resultado.
 *   Ej: 1 x 1 = 1
 *       1 x 2 = 2
 *       1 x 3 = 3
 *       ...
 */

function fun_Multiplicacion(): void {
    let valor: number = 5;

    for (let index = 1; index <= 10; index++) {
        console.log(index + " x " + valor + " = " + (index * valor));
    }
}

fun_Multiplicacion();