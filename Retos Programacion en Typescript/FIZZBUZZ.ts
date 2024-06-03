/*
 * Escribe un programa que muestre por consola los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

function fizzbuzz(): void {
    for (let index = 1; index <= 100; index++) {
        let buzz: boolean = (index % 5 == 0);
        let fazz: boolean = (index % 3 == 0);

        if (buzz && fazz) {
            console.log(index + " fizzbuzz");
        } else if (buzz) {
            console.log(index + " buzz");
        } else if (fazz) {
            console.log(index + " fizz");
        } else {
            console.log(index);
        }
    }
}

fizzbuzz();