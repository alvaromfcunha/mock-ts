import ProfessorService from "../src/ProfessorService";
import ProfessorConst from "./ProfessorConst";

export default class MockProfessorService implements ProfessorService {
  get(id: number): string {
    return JSON.stringify(ProfessorConst[id]);
  }
}