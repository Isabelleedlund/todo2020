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