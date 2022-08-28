import Professor from "./Professor";
import ProfessorService from "./ProfessorService";

export default class BuscaProfessor {
  #service: ProfessorService;

  constructor(service: ProfessorService) {
    this.#service = service;
  }

  get(id: number): Professor {
    const professorString = this.#service.get(id);
    const professorObj: Record<string, string> = JSON.parse(professorString);
    return new Professor(professorObj.nome, professorObj.horarioAtendimento, professorObj.periodo);
  }
}
