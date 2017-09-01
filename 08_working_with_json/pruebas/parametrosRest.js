// Parametros REST o agrupados

// Las funciones recien un array que contiene todos los parametros pasados al ejecutarla.

function mostrarAlgo(...datos) {
    console.log(datos);
    console.log(datos.length);
    for (let dato of datos) {
        console.log(dato);
    }
}

mostrarAlgo("param1", "param2", "param3", "param4");