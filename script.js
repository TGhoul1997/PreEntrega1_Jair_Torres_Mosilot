let nombreCompleto;
do {
    nombreCompleto = prompt("Hola! Para accceder a un préstamo a cuotas ingrese su nombre completo o escriba 'ESC' para salir").toUpperCase();
    if (nombreCompleto !== "ESC") {
        ingresarDni = prompt("Hola " + nombreCompleto + ". Digite su DNI");
        ingresarMonto = parseFloat("Ingrese el monto en soles que desea solicitar");
        cuotasRequeridas = parseInt(prompt("Ingresa el número de cuotas requeridas (cuotas: 3, 6, 12 y 36)"));
        switch (cuotasRequeridas) {
            case 3:
                const operacionTresCuotas = (a, b) => (a*20) / b;
                console.log(operacionTresCuotas(ingresarMonto, cuotasRequeridas));
            case 6:
                const operacionSeisCuotas = (a, b) => (a*15) / b;
                console.log(operacionSeisCuotas(ingresarMonto, cuotasRequeridas));
            case 12:
                const operacionDoceCuotas = (a, b) => (a*10) / b;
                console.log(operacionDoceCuotas(ingresarMonto, cuotasRequeridas));
            case 36:
                const operacionTresSeisCuotas = (a, b) => (a*5) / b;
                console.log(operacionTresSeisCuotas(ingresarMonto, cuotasRequeridas));
            default:
                alert("El número de cuotas requeridas no es válida");
                break;
        }
    }
} while (nombreCompleto !== "ESC");
// for para imprimir las cuotas por mes y su total con if por las constantes
