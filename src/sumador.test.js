import sumar from "./sumador.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });

  it("fizzbuzz deberia devolver Fizz si es el numero 3", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });

  it("fizzbuzz deberia devolver Buzz si es el numero multiplo de 5", () => {
    expect(fizzbuzz(10)).toEqual("Buzz");
  });
});

function fizzbuzz(n) {
  return "Fizz";
}
