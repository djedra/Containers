import Character from "../Character.js";
import Team from "../Team.js";
import ErrorRepository from "../ErrorRepository.js";

const team = new Team();

const errorRepository = new ErrorRepository();


const swordsman = new Character('Swordsman', 'Swordsman')
const bowman = new Character('Bowman', 'Bowman' );
const magician = new Character('Magician', 'Magician' );
const undead = new Character('Undead', 'Undead' );
const zombie = new Character('Zombie', 'Zombie' );
const daemon = new Character('Daemon', 'Daemon' );

test('add test', () => {
  team.add(swordsman)
  expect(team.members.has(swordsman)).toBe( true);
});

test('add error test', () => {
  expect(() => {
    team.add(swordsman);
    team.add(swordsman);
  }).toThrow( 'Ошибка! Такой объект уже существует');
});

test('add All test', () => {
  team.addAll(swordsman, swordsman, bowman, undead, zombie, daemon, magician)
  expect(team.members.has(swordsman)).toBe( true);
});

test('toArray test', () => {
  team.addAll(swordsman)
  team.toArray()
  expect(team.members.size).toBe( 6);
});

test('get error test', () => {
  expect(errorRepository.translate(404)).toBe( 'Страница не найдена');
});

test('get unknown error test', () => {
  expect(errorRepository.translate(201)).toBe( 'Unknown error');
});

