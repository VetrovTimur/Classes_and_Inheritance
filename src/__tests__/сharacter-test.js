import Сharacter from "../сharacter.js";

// eslint-disable-next-line no-undef
test("name long", () => {
  // eslint-disable-next-line no-undef
  expect(() => new Сharacter("veryLongName", "Undead")).toThrow(
    "There is no such class"
  );
});

// eslint-disable-next-line no-undef
test("name short", () => {
  // eslint-disable-next-line no-undef
  expect(() => new Сharacter("veryShortName", "Undead")).toThrow("There is no such class");
});

// eslint-disable-next-line no-undef
test("name norm", () => {
  // eslint-disable-next-line no-undef
  expect(new Сharacter("normName", "Undead").name).toBe("normName");
});

// eslint-disable-next-line no-undef
test.each(["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"])(
  "test pers with type %s ",
  (type) => {
    // eslint-disable-next-line no-undef
    expect(new Сharacter("normName", type).type).toBe(type);
  }
);
// eslint-disable-next-line no-undef
test("other type", () => {
  // eslint-disable-next-line no-undef
  expect(() => new Сharacter("xxx", "mag")).toThrow("There is no such class");
});

// eslint-disable-next-line no-undef
test("levelUp alive pers", () => {
  const pers = new Сharacter("normName", "Undead");
  pers.health = 100;
  pers.level = 1;
  pers.attack = 25;
  pers.defence = 25;
  pers.levelUp();
  // eslint-disable-next-line no-undef
  expect(pers.health).toBe(100);
  // eslint-disable-next-line no-undef
  expect(pers.level).toBe(2);
  // eslint-disable-next-line no-undef
  expect(pers.attack).toBe(30);
  // eslint-disable-next-line no-undef
  expect(pers.defence).toBe(30);
});

// eslint-disable-next-line no-undef
test("levelUp dead pers", () => {
  const pers = new Сharacter("normName", "Undead");
  pers.health = 0;
  // eslint-disable-next-line no-undef
  expect(() => pers.levelUp()).toThrow("you cannot raise the level of the deceased");
});

// eslint-disable-next-line no-undef
test("damage alive pers", () => {
  const pers = new Сharacter("normName", "Undead");
  pers.health = 50;
  pers.defence = 20;
  pers.damage(10);
  // eslint-disable-next-line no-undef
  expect(pers.health).toBe(42);
});

// eslint-disable-next-line no-undef
test("damage dead pers", () => {
  const pers = new Сharacter("normName", "Undead");
  pers.health = 0;
  // eslint-disable-next-line no-undef
  expect(() => pers.damage(10)).toThrow("died");
});