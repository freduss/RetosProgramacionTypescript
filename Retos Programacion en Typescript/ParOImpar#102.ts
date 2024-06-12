//Recorrer numeros del 1 al 100 y imprimier si el numero es par o impar

function funParOImpar(): void {
    for (let index = 1; index < 101; index++) {
        const element = index;

        if ((element % 2) == 0)
            console.log("El numero " + element + " es par");
        else
            console.log("El numero " + element + " es impar");

    }
}

funParOImpar();