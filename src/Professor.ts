export default class Professor {
  #nome: string;
  #horarioAtendimento: string;
  #periodo: string;

  constructor(nome: string, horarioAtendimento: string, periodo: string) {
    this.#nome = nome;
    this.#horarioAtendimento = horarioAtendimento;
    this.#periodo = periodo;
  }

  getNome() {
    return this.#nome;
  }

  getHorarioAtendimento() {
    return this.#horarioAtendimento;
  }

  getPeriodo() {
    return this.#periodo;
  }

  setNome(nome: string) {
    this.#nome = nome;
  }

  setHorarioAtendimento(horarioAtendimento: string) {
    this.#horarioAtendimento = horarioAtendimento;
  }

  setPeriodo(periodo: string) {
    this.#periodo = periodo;
  }
}