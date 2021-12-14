// On importe "express" et "dotenv"
const express = require("express");
require("dotenv").config("");

// On importe les routes de Article, User et Comment
const userRoute = require("./routers/user.routes");
const articleRoute = require("./routers/article.routes");
const commentRoute = require("./routers/comment.routes");

// On importe "path et cors"
const path = require("path");
const cors = require("cors");


// On initialise  express
const app = express();

//Configuration de BodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Middleware Header pour les erreurs CORS 
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});;


//On crée les routes api de l'app
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/auth", userRoute);
app.use("/api/article", articleRoute);
app.use("/api/comment", commentRoute);

module.exports = app;
