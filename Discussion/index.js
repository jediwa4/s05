function printName() {
  console.log("My name is Juan.");
}

printName();

let variableFunction = function () {
  console.log("Hello Again");
};

variableFunction();

{
  let localVar = "Nonan";
}
let globalVar = "Mr. Philippines";

console.log(globalVar);

function showNames() {
  var functionVar = "Juan";
  const functionConst = "Happy";
  let functionLet = "Joy";
  console.log(functionVar);
  console.log(functionConst);
  console.log(functionLet);
}
showNames();

function printName(name) {
  console.log("Hello " + name);
}

let sampleVariable = "Raphael";
printName(sampleVariable);
