import MockProfessorService from "./MockProfessorService";
import BuscaProfessor from "../src/BuscaProfessor";
import ProfessorService from "../src/ProfessorService";

test('success/1', () => {
  const mock: ProfessorService = new MockProfessorService();
  const busca = new BuscaProfessor(mock);
  const professor = busca.get(1);
  expect(professor.getNome()).toBe('Alexandre');
  expect(professor.getHorarioAtendimento()).toBe('10:00');
  expect(professor.getPeriodo()).toBe('Noturno');
})

test('success/2', () => {
  const mock = new MockProfessorService();
  const busca = new BuscaProfessor(mock);
  const professor = busca.get(2);
  expect(professor.getNome()).toBe('\nAlex\0\t');
  expect(professor.getHorarioAtendimento()).toBe('88:88');
  expect(professor.getPeriodo()).toBe('Diurno');
})

test('success/3', () => {
  const mock = new MockProfessorService();
  const busca = new BuscaProfessor(mock);
  const professor = busca.get(3);
  expect(professor.getNome()).toBe('😂Ale😂');
  expect(professor.getHorarioAtendimento()).toBe('00:10');
  expect(professor.getPeriodo()).toBe('noturno');
})

test('failure/1', () => {
  const mock = new MockProfessorService();
  const busca = new BuscaProfessor(mock);
  const professor = busca.get(4);
  expect(professor.getNome()).toBeUndefined();
  expect(professor.getHorarioAtendimento()).toBe('10:00');
  expect(professor.getPeriodo()).toBe('Noturno');
})

test('failure/2', () => {
  const mock = new MockProfessorService();
  const busca = new BuscaProfessor(mock);
  const professor = busca.get(5);
  expect(professor.getNome()).toBe('Alexandre');
  expect(professor.getHorarioAtendimento()).toBeUndefined();
  expect(professor.getPeriodo()).toBe('Noturno');
})

test('failure/3', () => {
  const mock = new MockProfessorService();
  const busca = new BuscaProfessor(mock);
  const professor = busca.get(6);
  expect(professor.getNome()).toBe('Alexandre');
  expect(professor.getHorarioAtendimento()).toBe('10:00');
  expect(professor.getPeriodo()).toBeUndefined();
})