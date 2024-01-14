import Undead from "../undead";

// eslint-disable-next-line no-undef
test("make Undead", () => {
  const pers = new Undead("Uname");
  // eslint-disable-next-line no-undef
  expect(pers).toEqual({
    name: "Uname",
    type: "Undead",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});