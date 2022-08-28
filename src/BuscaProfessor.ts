import Professor from "./Professor";
import ProfessorService from "./ProfessorService";

export default class BuscaProfessor {
  #service: ProfessorService;

  constructor(service: ProfessorService) {
    this.#service = service;
  }

  get(id: number): Professor {
    const obj = this.#service.get(id)
    return new Professor(obj.nome, obj.horarioAtendimento, obj.periodo)
  }
}
