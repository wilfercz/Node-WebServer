import express from 'express';
import hbs from 'hbs';
import * as url from 'url';
import dotenv from 'dotenv';
console.clear();

/* Magia con Express */
const app = express();

dotenv.config();
const port = process.env.PORT;

/* Directorios */
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Middewares - Servir Contenido Estático
app.use( express.static('public') );

app.get('/', (req, res)=>{

    const options = {
        nombre: 'Wilfer Cruz',
        titulo: 'Node y Express'
    }

    res.render('home', options);
});

app.get('/generic', (req, res)=>{

    const options = {
        nombre: 'Wilfer Cruz',
        titulo: 'Node y Express'
    }

    res.render('generic', options);
});

app.get('/elements', (req, res)=>{

    const options = {
        nombre: 'Wilfer Cruz',
        titulo: 'Node y Express'
    }


    res.render('elements', options);
});

/* app.get('*', (req, res)=>{
    res.sendFile( __dirname + '/public/404.html');
}); */

app.listen(port, ()=>{
    console.log(`Aplicación está escuchando en http://localhost:${port}`);
});


