import Bowman from "../bowman";

// eslint-disable-next-line no-undef
test("make Bowman", () => {
  const pers = new Bowman("Bname");
  // eslint-disable-next-line no-undef
  expect(pers).toEqual({
    name: "Bname",
    type: "Bowman",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});