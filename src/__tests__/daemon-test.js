import Daemon from "../daemon.js";

// eslint-disable-next-line no-undef
test("make Daemon", () => {
  const pers = new Daemon("Dname");
  // eslint-disable-next-line no-undef
  expect(pers).toEqual({
    name: "Dname",
    type: "Daemon",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});