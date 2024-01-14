import Character from './сharacter.js';

export default class Bowman extends Character {
  constructor(name, type = 'Bowman') {
    super(name, type);
    this.type = 'Bowman';
    this.attack = 25;
    this.defence = 25;
  }
}