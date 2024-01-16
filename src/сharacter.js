export default class Character {
    constructor(name, type) {
      const types = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];
      if (name.length < 2 || name.length > 10) {
        throw new Error("There is no such class");
      }
      this.name = name;
      if (!types.some((el) => el === type)) {
        throw new Error("There is no such class");
      }
      this.type = type;
  
      this.health = 100;
      this.level = 1;
    }
  
    levelUp() {
      if (this.health <= 0) {
        throw new Error("you cannot raise the level of the deceased");
      }
      this.level++;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    }
  
    damage(points) {
      if (this.health <= 0) {
        throw new Error("died");
      }
      this.health -= points * (1 - this.defence / 100);
    }
  }