import express from "express";
import paciente from "./router/pacientes.router.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/", paciente);


app.listen(PORT, () => {
    console.log(`Rodando o Servidor na porta ${PORT}`);
  });