import Swordsman from "../swordsman";

// eslint-disable-next-line no-undef
test("make Swordsman", () => {
  const pers = new Swordsman("Sname");
  // eslint-disable-next-line no-undef
  expect(pers).toEqual({
    name: "Sname",
    type: "Swordsman",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});