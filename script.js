let nombreCompleto;
do {
    nombreCompleto = prompt("Hola! Para accceder a un préstamo a cuotas ingrese su nombre completo o escriba 'ESC' para salir").toUpperCase();
    if (nombreCompleto !== "ESC") {
        do{
            let ingresarDni = prompt("Hola " + nombreCompleto + ". Digite su DNI");
            if (ingresarDni !== "" && ingresarDni.length === 8) {
                let ingresarMonto = parseFloat(prompt("Ingrese el monto en soles que desea solicitar"));
                if (ingresarMonto !== "" && ingresarMonto >= 1000) {
                    let cuotasRequeridas = parseInt(prompt("Ingresa el número de cuotas requeridas (cuotas: 3, 6, 12 y 36)"));
                    switch (cuotasRequeridas) {
                        case 3:
                            function operacionTresCuotas (a, b, c){
                                switch (c) {
                                    case "cuota":
                                        return (a * 1.20) / b;
                                        break;
                                    case "total":
                                        return a * 1.20;
                                        break;
                                    default:
                                        return 0;
                                        break;
                                }
                            }
                            for(let i = 1; i <= 3; i++) {
                                console.log("Cuota " + i + ":" + operacionTresCuotas (ingresarMonto, cuotasRequeridas, cuota));
                                console.log("Monto Total: " + operacionTresCuotas (ingresarMonto, cuotasRequeridas, total));
                            }
                        case 6:
                            function operacionSeisCuotas (a, b, c){
                                switch (c) {
                                    case "cuota":
                                        return (a * 1.15) / b;
                                        break;
                                    case "total":
                                        return a * 1.15;
                                        break;
                                    default:
                                        return 0;
                                        break;
                                }
                            }
                            for(let i = 1; i <= 6; i++) {
                                console.log("Cuota " + i + ":" + operacionSeisCuotas (ingresarMonto, cuotasRequeridas, cuota));
                                console.log("Monto Total: " + operacionSeisCuotas (ingresarMonto, cuotasRequeridas, total));
                            }
                        case 12:
                            function operacionDoceCuotas (a, b, c){
                                switch (c) {
                                    case "cuota":
                                        return (a * 1.10) / b;
                                        break;
                                    case "total":
                                        return a * 1.10;
                                        break;
                                    default:
                                        return 0;
                                        break;
                                }
                            }
                            for(let i = 1; i <= 12; i++) {
                                console.log("Cuota " + i + ":" + operacionDoceCuotas (ingresarMonto, cuotasRequeridas, cuota));
                                console.log("Monto Total: " + operacionDoceCuotas (ingresarMonto, cuotasRequeridas, total));
                            }
                        case 36:
                            function operacionTresSeisCuotas (a, b, c){
                                switch (c) {
                                    case "cuota":
                                        return (a * 1.05) / b;
                                        break;
                                    case "total":
                                        return a * 1.05;
                                        break;
                                    default:
                                        return 0;
                                        break;
                                }
                            }
                            for(let i = 1; i <= 36; i++) {
                                console.log("Cuota " + i + ":" + operacionTresSeisCuotas (ingresarMonto, cuotasRequeridas, cuota));
                                console.log("Monto Total: " + operacionTresSeisCuotas (ingresarMonto, cuotasRequeridas, total));
                            }
                        default:
                            alert("El número de cuotas requeridas no es válida");
                            break;
                    }
                } else {
                    alert("Debe ingresar un monto para poder continuar");
                }
            } else {
                alert("Debe ingresar su DNI para poder continuar");
            }
        } while (ingresarDni !== "");
    }
} while (nombreCompleto !== "ESC");
