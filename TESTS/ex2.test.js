require("jest");
const myTest = require('./ex2');

test("il n ya pas d'élements dont leur taille est supérieur à 50", () => {
  expect(myTest());
});