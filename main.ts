// Import nommé
import { add, substract } from "./src/calculator";

// Utilisation des fonctions
let resultOne = add(10, 10)
let resultTwo = substract(30, 5)

console.log('Import nommé:');
console.log('Add: ', resultOne);
console.log('Substract: ', resultTwo);

// Import default de la classe Calculator
import Calculator from "./src/calculatorObject";

// Instanciation de Calculator
const calc = new Calculator()

// Utilisation des méthodes de Calculator
resultOne = calc.add(10, 10)
resultTwo = calc.substract(30, 5)

console.log('Import default:');
console.log('Add: ', resultOne);
console.log('Substract: ', resultTwo);

