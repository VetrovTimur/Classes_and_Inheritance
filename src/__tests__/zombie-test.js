import Zombie from "../zombie";

// eslint-disable-next-line no-undef
test("make Zombie", () => {
  const pers = new Zombie("Zname");
  // eslint-disable-next-line no-undef
  expect(pers).toEqual({
    name: "Zname",
    type: "Zombie",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});