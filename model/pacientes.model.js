import paciente from "../router/pacientes.router.js";

export class Paciente{
    constructor(id,nome,idade,descricao){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.descricao = descricao;

    }
    
      
    static pacientes = [{
        id: 1,
        nome: "Maria Silva",
        idade: 34,
        descricao: "Internado"
      },
      {
        id: 2,
        nome: "João Souza",
        idade: 45,
        descricao: "Liberado"
      },
      {
        id: 3,
        nome: "Ana Paula",
        idade: 29,
        descricao: "Em análise"
      }];

    salvarPaciente(paciente){
        Paciente.pacientes.push(paciente)
    }
   
    static filtraInternado(status){
    return Paciente.pacientes.filter(p => p.descricao === status)
    }
    
 }



