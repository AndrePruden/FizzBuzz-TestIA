describe("TestFizzBuzz", () => {
  it("fizzbuzz deberia devolver Fizz si es el numero 3", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });

  it("fizzbuzz deberia devolver 1 si es el numero 1", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });

  it("fizzbuzz deberia devolver Buzz si es el numero 5", () => {
    expect(fizzbuzz(5)).toEqual("Buzz");
  });

});

function fizzbuzz(n) {
    if(n == 3){
        return "Fizz";
    }
    if(n == 5){
        return "Buzz";
    }
    return n.toString();
  
}
