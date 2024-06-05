/*
 * Llamar a una API es una de las tareas más comunes en programación.
 *
 * Implementa una llamada HTTP a una API (la que tú quieras) y muestra su
 * resultado a través de la terminal. Por ejemplo: Pokémon, Marvel...
 *
 * Aquí tienes un listado de posibles APIs:
 * https://github.com/public-apis/public-apis
 */

let url: string = "https://dogapi.dog/api/v2/breeds";

function fun_UsigFetch(): void {
    const RequestInit: RequestInit = {
        method: "Get",
        headers: { "Content-type": "application/json" }
    }

    fetch(url, RequestInit)
        .then((response) => {
            response.json().then((datos) => {
                if (datos) {

                }
            }).catch((error) => { console.log("Error al consultar api " + error) });
        }).catch((error) => { console.log("Error al consultar api " + error) });
}

fun_UsigFetch();