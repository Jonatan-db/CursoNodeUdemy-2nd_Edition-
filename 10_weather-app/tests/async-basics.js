console.log('Iniciando app... ' + new Date().toTimeString());

setTimeout( () => {
    console.log('Primera ejecución asincronica finalizada. ' + new Date().toTimeString());
}, 2000);

setTimeout( () => {
    console.log("Segunda llamada asincronica finalizada.");
}, 0);

console.log('Finalizando app. ' + new Date().toTimeString());