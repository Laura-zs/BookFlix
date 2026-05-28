import express from "express";

import mongoose from "mongoose";

import cors from "cors";

import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";

import favoriteRoutes from "./routes/favoriteRoutes.js";

dotenv.config();

const app =
  express();

app.use(cors());

app.use(express.json());

mongoose.connect(
  process.env.MONGO_URI
)
.then(() => {

  console.log(
    "MongoDB conectado"
  );

})
.catch((err) => {

  console.log(err);

});

app.use(
  "/auth",
  authRoutes
);

app.use(
  "/favorites",
  favoriteRoutes
);

app.get("/", (req, res) => {

  res.send(
    "API funcionando"
  );

});

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Servidor rodando na porta ${PORT}`
  );

});