/* Inlämningsuppgift 1
Mål:  
Målet med uppgiften är att utvärdera dina kunskaper i följande moment:

- Grundläggande NoSQL (mongoDB)
- Nodejs
- Formulärhantering
- Express ramverk
- Routing
- Template engine
- Grundläggande git

Metod:
Lämna in zippat format av projektet i zenit och github länken av projektet.

Beskrivning av uppgiften: 

G:
- Du skall skapa en TODO list med Express, Mongo och EJS.
- Alla todo modellar måste sparas i databasen
- Användare ska kunna skapa , läsa , redigera och radera från todo listan. 
- Databas uppgifterna ska läggas separat till ex. in i en config fil och ska inte sparas i git
- Variabel och funktion namn ska följa standard konvention
- Views , modeller och router ska vara i separat mappar
- Varje ändring ska sparas i git och github.

VG
- Man ska kunna lägga till pagination på sidan 
- Användare ska kunna sotera listan efter datum
- Kvalitet av kod kommer att ta hansyn i när man bedömmer. 
*/

const express           = require("express");
const mongoose          = require("mongoose");
const todoRouter        = require("./router/todoRouter");
const sassMiddleware    = require('node-sass-middleware');
const config            = require("./config/config");
const path              = require("path");
const app               = express();
const port              = process.env.PORT || 8000;

app.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')    
}));

app.use(express.urlencoded({extended:true}))

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(todoRouter);

const options = {
    useUnifiedTopology: true, 
    useNewUrlParser: true
}

mongoose.connect(config.databaseURL,options ).then(() => {
    console.log("success");
    app.listen(port);

});

module.exports = {app} // Unit testing with Kemal