import Сharacter from "../сharacter.js";

test("name long", () => {
  expect(() => new Сharacter("veryLongName", "Undead")).toThrow(
    "There is no such class"
  );
});

test("name short", () => {
  expect(() => new Сharacter("veryShortName", "Undead")).toThrow("There is no such class");
});

test("name norm", () => {
  expect(new Сharacter("normName", "Undead").name).toBe("normName");
});

test.each(["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"])(
  "pers with type %s",
  (type) => {

    expect(new Сharacter("normName", type).type).toBe(type);
  }
)

test("other type", () => {
  expect(() => new Сharacter("xxx", "mag")).toThrow("There is no such class");
});

test("levelUp alive pers", () => {
  const pers = new Сharacter("normName", "Undead");
  pers.health = 100;
  pers.level = 1;
  pers.attack = 25;
  pers.defence = 25;
  pers.levelUp();
  expect(pers.health).toBe(100);
  expect(pers.level).toBe(2);
  expect(pers.attack).toBe(30);
  expect(pers.defence).toBe(30);
});

test("levelUp dead pers", () => {
  const pers = new Сharacter("normName", "Undead");
  pers.health = 0;
  expect(() => pers.levelUp()).toThrow("you cannot raise the level of the deceased");
});

test("damage alive pers", () => {
  const pers = new Сharacter("normName", "Undead");
  pers.health = 50;
  pers.defence = 20;
  pers.damage(10);
  expect(pers.health).toBe(42);
});

test("damage dead pers", () => {
  const pers = new Сharacter("normName", "Undead");
  pers.health = 0;
  expect(() => pers.damage(10)).toThrow("died");
});