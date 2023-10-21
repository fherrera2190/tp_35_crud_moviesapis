const express = require("express");
const app = express();
const methodOverride = require("method-override");
const paginate = require("express-paginate");
//Aquí pueden colocar las rutas de las APIs

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(paginate.middleware(8, 50));
//Aquí estoy disponiendo la posibilidad para utilizar el seteo en los formularios para el usod e los metodos put ó delete
app.use(methodOverride("_method"));

app.use("/api/v1/movies", require("./routes/v1/movies.routes"));
app.use("/api/v1/genres", require("./routes/v1/genres.routes"));

//Activando el servidor desde express
app.listen("3001", () => console.log("Servidor corriendo en el puerto 3001"));
