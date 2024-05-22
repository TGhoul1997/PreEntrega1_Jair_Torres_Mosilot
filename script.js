let nombreCompleto;
do {
    nombreCompleto = prompt("Hola! Para accceder a un préstamo a cuotas ingrese su nombre completo o escriba 'ESC' para salir.").toUpperCase();
    if (nombreCompleto == "ESC") {
        alert("¡Hasta pronto!");
    } else if (nombreCompleto == ""){
        alert("Debe ingresar su nombre.");
    } else{
        let ingresarDni = prompt("Hola " + nombreCompleto + ". Digite su DNI.");
        if (ingresarDni !== "" && ingresarDni.length === 8) {
            let ingresarMonto = parseFloat(prompt("Ingrese el monto en soles que desea solicitar."));
            if (ingresarMonto !== "" && ingresarMonto >= 1000) {
                let cuotasRequeridas = parseInt(prompt("Ingresa el número de cuotas requeridas (cuotas: 3, 6, 12 y 36)."));
                switch (cuotasRequeridas) {
                    case 3:
                        function operacionTresCuotas(a, b, c) {
                            switch (c) {
                                case 1:
                                    return (a * 1.20) / b;
                                    break;
                                case 2:
                                    return a * 1.20;
                                    break;
                                default:
                                    return 0;
                                    break;
                            };
                        };
                        for (let i = 1; i <= 3; i++) {
                            console.log("Cuota " + i + ": " + operacionTresCuotas(ingresarMonto, 3, 1));
                        };
                        console.log("Monto Total: " + operacionTresCuotas(ingresarMonto, 3, 2));
                        break;
                    case 6:
                        function operacionSeisCuotas(a, b, c) {
                            switch (c) {
                                case 1:
                                    return (a * 1.15) / b;
                                    break;
                                case 2:
                                    return a * 1.15;
                                    break;
                                default:
                                    return 0;
                                    break;
                            };
                        };
                        for (let i = 1; i <= 6; i++) {
                            console.log("Cuota " + i + ": " + operacionSeisCuotas(ingresarMonto, 6, 1));
                        };
                        console.log("Monto Total: " + operacionSeisCuotas(ingresarMonto, 6, 2));
                        break;
                    case 12:
                        function operacionDoceCuotas(a, b, c) {
                            switch (c) {
                                case 1:
                                    return (a * 1.10) / b;
                                    break;
                                case 2:
                                    return a * 1.10;
                                    break;
                                default:
                                    return 0;
                                    break;
                            };
                        };
                        for (let i = 1; i <= 12; i++) {
                            console.log("Cuota " + i + ": " + operacionDoceCuotas(ingresarMonto, 12, 1));
                        };
                        console.log("Monto Total: " + operacionDoceCuotas(ingresarMonto, 12, 2));
                        break;
                    case 36:
                        function operacionTresSeisCuotas(a, b, c) {
                            switch (c) {
                                case 1:
                                    return (a * 1.05) / b;
                                    break;
                                case 2:
                                    return a * 1.05;
                                    break;
                                default:
                                    return 0;
                                    break;
                            };
                        };
                        for (let i = 1; i <= 36; i++) {
                            console.log("Cuota " + i + ": " + operacionTresSeisCuotas(ingresarMonto, 36, 1));
                        };
                        console.log("Monto Total: " + operacionTresSeisCuotas(ingresarMonto, 36, 2));
                        break;
                    default:
                        alert("El número de cuotas requeridas no es válida.");
                        break;
                };
            } else {
                alert("Ingrese un monto mayor o igual a 1000 para poder continuar.");
            };
        } else {
            alert("Debe ingresar su DNI para poder continuar.");
        };
    }
} while (nombreCompleto !== "ESC");
