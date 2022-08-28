export default interface ProfessorService {
  get(id: number): Record<string, any>;
}