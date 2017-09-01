
var getUser = (id, callback) => {
console.log("getUser(): esperando respuesta...");
    var user = {
        id: id,
        name: "Jonatandb"
    };

setTimeout(() => {
    callback(user);
}, 2000);

};

console.log("Ejecutando getUser()...");

getUser(18, (user) => {
    console.log("Respuesta:");
    console.log(user);
});
