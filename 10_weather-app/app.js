const req = require('request');
const url = 'http://map22s.googleapis.com/maps/api/geocode/json?address=cardenal fagnano 2680';
console.log("\nObteniendo datos de Google...");
console.log("\nURL: " + url + "\n");
req(
    {
        url: url,
        json: true
    },
(error, response, body) => {
    (error) ? console.log("Error: ", error) : console.log("Sin errores.");                                             // Se muestra el error si existe alguno.
    (response && response.statusCode != 200) ? console.log("Response: ", response && response.statusCode === 200) : null;    // Se muestra la respuesta si es no es satisfactoria.
    //console.log("Resultado: \n\n", JSON.stringify(body, /*opciones de filtrado*/ undefined, /*formateo del json*/ /*espacios para identacion:*/2)); // Se muestra el resultado en formato JSON.
    const respuesta_exitosa = error || response.statusCode === 200; // 200 = hubo una respuesta exitosa por parte del servidor web.
    if(respuesta_exitosa){
        console.log("formatted_address: ", body.results[0].formatted_address);
        console.log("Latitud: ", body.results[0].geometry.location.lat);
        console.log("Longitud: ", body.results[0].geometry.location.lng);
    }
});