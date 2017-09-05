const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');  // Le digo a Express que motor de vistas utilizar.

// Creación y uso de un Middleware para servir la carpeta public
// Los Middlewares permiten configurar como funciona una aplicación web hecha con Express.
// Para agregar un Middleware se utiliza app.use(funcionAUtilizar);
// En este caso se le pasa una función provista por Express para servir directorio con contenido estatico.
// Esta función toma como parámetro la ruta absoluta del directorio que se desea servir, por lo que se utiliza __dirname para
// obtener la referencia a la carpeta raiz del proyecto, junto con el nombre o la ruta de la carpeta con contenido estatico a servir:
app.use(express.static(__dirname + '/public'));
    // Esto permite por ejemplo acceder directamente al archivo static.html desde: localhost:3000/static.html

// Configuración de handlers de rutas para responder a requests GET:

// Ruta '/':
app.get('/', (request, response) => {
    // Primer argunmento la url
    // Segundo parametro funcion a ejecutar cuando se haga la petición a esa url
    //  dicha función posee dos parámetros: request, response
    //  request contiene el cuerpo de la solicitud, los headers, el metodo del request...
    //  response contiene un monton de metodos para responder a la peticion de la manera que uno quiera (html a devolver, statusCode a devolver, etc)
   // response.send('<h1>Hola Express!</h1>'); // Permite responser enviando datos de vuelta al cliente.
   response.render('home.hbs',{
       pageTitle: 'Jom peish',
       currentYear: new Date().getFullYear(), 
       welcomeMessage: 'Bienvenido a mi sitio con Noud giés'
   })
});

// Ruta '/json':
app.get('/json', (req, res) => {
    res.send({
        nombre: 'Jonatandb',
        gustos: [
            'Bicicleta',
            'Ciudades'
        ]
    })
})

// Ruta '/about':
app.get('/about', (request, response) => {
    response.render('about.hbs', {
        pageTitle: 'About',
        currentYear: new Date().getFullYear(),
    })
})

// Ruta '/bad':
app.get('/bad', (req, resp)=> {
    resp.send({
        errorMessage: 'No se pudo completar la solicitud.'
    })
})

// app.listen se utiliza para vincular nuestra aplicación a un puerto en nuestra maquina, 
// para poder recibir peticiones a las rutas configuradas.
// ******    Hasta que no se ejecuta esa linea, la aplicación no es capaz de recibir ni responder solicitudes.
// app.listen acepta un segundo parámetro (opcional), que es una función que se va a ejecutar cuando 
// se inicie la ejecución del servidor.
app.listen(3000, () => {
    console.log('Servidor funcionando en el puerto 3000 -', new Date().toString());
});       // 3000 es el puerto elegido para servir nuestra aplicación, para utilizar navegando a: http://localhost:3000
// Al ejecutar la aplicación, la misma se queda corriendo, esperando requests a los que responder
// y nunca se va a detener, hasta que sean presionadas las teclas con CTRL+c.

