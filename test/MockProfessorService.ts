import ProfessorService from "../src/ProfessorService";
import ProfessorConst from "./ProfessorConst";

export default class MockProfessorService implements ProfessorService {
  get(id: number): Record<string, any> {
    return ProfessorConst[id];
  }
}