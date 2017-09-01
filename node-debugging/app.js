const express = require('express');
const app = express();

app.get('/',(req, res)=>{
    res.send('Bienvenidosss!');
    console.log('Solicitud entrante...');
});

app.get('/private',(req, res)=>{
    res.send('Shhh!!');
});

app.listen(3000, () => console.log('Server iniciado correctamente...'));