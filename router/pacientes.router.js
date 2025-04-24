import {Router} from "express";
import pacientescontroller from "../controller/pacientes.controller.js";

const paciente = Router();

//ROTA QUE MOSTRA TODOS OS PACIENTES
paciente.get("/", pacientescontroller.getPaciente);
//ROTA QUE MOSTRA TODOS OS PACIENTES INTERNADOS
paciente.get("/internado", pacientescontroller.getIternado);
//ROTA QUE MOSTRA TODOS OS PACIENTES LIBERADOS
paciente.get("/Liberado", pacientescontroller.getLiberado);
//ROTA QUE MOSTRA TODOS OS PACIENTES EM ANALISE
paciente.get("/Analise", pacientescontroller.getAnalise);
//ROTA PARA CADASTRAR
paciente.post("/cadastrar", pacientescontroller.addPaciente);


export default paciente;