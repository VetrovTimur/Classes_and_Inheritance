import Magician from "../magician";

// eslint-disable-next-line no-undef
test("make Magician", () => {
  const pers = new Magician("Mname");
  // eslint-disable-next-line no-undef
  expect(pers).toEqual({
    name: "Mname",
    type: "Magician",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});