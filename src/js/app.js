import Character from "./Character.js";
import Team from "./Team.js";
import ErrorRepository from "./ErrorRepository.js";

const team = new Team();

const swordsman = new Character('Swordsman', 'Swordsman')
const bowman = new Character('Bowman', 'Bowman' );
const magician = new Character('Magician', 'Magician' );
const undead = new Character('Undead', 'Undead' );
const zombie = new Character('Zombie', 'Zombie' );
const daemon = new Character('Daemon', 'Daemon' );



team.add(swordsman)

team.addAll(swordsman, swordsman, bowman, undead, zombie, daemon, magician)


console.log(team.members)

team.members.forEach((function(item){console.log(item)} ))


console.log(team.members.has(swordsman))

console.log(team.toArray())


const errorRepository = new ErrorRepository()

console.log(errorRepository.translate(404))

console.log(errorRepository.translate(202))




