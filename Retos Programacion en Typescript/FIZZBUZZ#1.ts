/*
 * Escribe un programa que muestre por consola los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

function fizzbuzz(indice: number): void {

    if (indice == 101)
        return;

    let buzz: boolean = (indice % 5 == 0);
    let fazz: boolean = (indice % 3 == 0);

    if (buzz && fazz) {
        console.log(indice + " fizzbuzz");
    } else if (buzz) {
        console.log(indice + " buzz");
    } else if (fazz) {
        console.log(indice + " fizz");
    } else {
        console.log(indice);
    }


    fizzbuzz(indice + 1);
}

fizzbuzz(1);