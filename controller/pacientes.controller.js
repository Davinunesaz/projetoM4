import { Paciente }  from "../model/pacientes.model.js";
import { v4 as uuidv4 } from "uuid";



class pacientescontroller {
   
   //LISTA TODOS OS PACIENTES
    getPaciente(req, res){
        res.json({pacientes: Paciente.pacientes});
    }

    //ADICIONA TODOS OS PACIENTES
 async addPaciente(req,res) {
    const{nome,idade, descricao} = req.body;

    if(!nome || !idade || !descricao){
        res.json({
            message: "Precisa adicionar todos os dados"
        })

        if (!Number.isInteger(idade)) {
            res.json({ message: "Idade deve ser um número inteiro" });
          }
    }
    
  // CRIA NOVO PACIENTE
    try{
    const novoPaciente = new Paciente(uuidv4(),nome,idade,descricao);
    novoPaciente.salvarPaciente(novoPaciente);
      res.json({
        message: "Paciente criado com sucesso",
        paciente: novoPaciente,
    })
     }catch(erro){
        res.status(400).json({erro})
     }
 }
   //filtra so os pacientes internados
  getIternado(req,res){
  const filtroInternado = Paciente.filtraInternado("Internado"); 
  res.json({ filtroInternado });
 }
   //filtra so os pacientes liberados
   getLiberado(req,res){
    const filtroLiberado = Paciente.filtraInternado("Liberado")
    res.json({filtroLiberado});
   }
  // filtra so os pacientes em analise
   getAnalise(req,res){
    const filtroAnalise = Paciente.filtraInternado("Em análise")
    res.json({filtroAnalise});
   }

}
export default new pacientescontroller();