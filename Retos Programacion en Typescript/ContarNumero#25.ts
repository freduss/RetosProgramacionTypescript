/*
 * Quiero contar del 1 al 100 de uno en uno (imprimiendo cada uno).
 * ¿De cuántas maneras eres capaz de hacerlo?
 * Crea el código para cada una de ellas.
 */

function funContadorRecursivo(nIndice: number = 1): void {
    if (nIndice > 100)
        return;

    console.log("Valor actual en recursividad: " + nIndice);

    funContadorRecursivo(nIndice + 1);
}

function funContadorFor(): void {
    for (let index = 1; index < 101; index++) {
        const element = index;
        console.log("Valor actual en for: " + element);
    }
}

// funContadorRecursivo();
// funContadorFor();
