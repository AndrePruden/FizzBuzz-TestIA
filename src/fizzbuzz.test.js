describe("TestFizzBuzz", () => {
  it("fizzbuzz deberia devolver Fizz si es el numero 3", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });

  it("fizzbuzz deberia devolver 1 si es el numero 1", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });

});

function fizzbuzz(n) {
    if(n%3 == 0){
        return "Fizz";
    }
    return n.toString();
  
}
