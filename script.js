// function getName(name) {
//   console.log(`Your name is ${name}`);
// }
// const myName = prompt("What is your name?");
// getName(myName);

function calcCost(price, bottles) {
  let totalCost = price * bottles;
  console.log(`The total cost is $${totalCost}`);
}
const price = prompt("What is the price of the bottle?");
const bottles = prompt("How many bottles do you want?");
calcCost(price, bottles);
