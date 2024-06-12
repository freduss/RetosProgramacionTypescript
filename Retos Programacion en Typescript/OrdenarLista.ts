/*
 * Crea una función que ordene y retorne una matriz de números.
 * - La función recibirá un listado (por ejemplo [2, 4, 6, 8, 9]) y un parámetro
 *   adicional "Asc" o "Desc" para indicar si debe ordenarse de menor a mayor
 *   o de mayor a menor.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan
 *   automáticamente.
 */
enum enumTipoOrden {
    Asc = 1, Desc = 2
}

let NumeroOrden: Array<number> = [6, 8, 9, 2, 1, 5, 4, 3, 7];

function fun_OrdenarLista(list: Array<number>, Orden: enumTipoOrden): void {

    if (Orden == enumTipoOrden.Asc) {

    }

    // if (Orden == enumTipoOrden.Desc) {

    // }
}

fun_OrdenarLista(NumeroOrden, enumTipoOrden.Asc);