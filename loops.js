// for (let index = 5; index > 0; index--) {
//   console.log('day #' + (index));
// }

const rnd1 = Math.random();  // 0 .. 0.999999999
let cardLimit = Math.round(rnd1 * 10000);  //  0 .. 10
console.log(cardLimit);

// let moneySpent = 0;
// for (let index = 0; index < 10; index++) {
//   if (cardLimit >= 1000) {
//     cardLimit -= 1000;
//     moneySpent += 1000;
//   } else {
//     break;
//   }
// }

let moneySpent = 0;
while (cardLimit >= 1000) {
  cardLimit -= 1000;
  moneySpent += 1000;
}

// do {
//   cardLimit -= 1000;
//   moneySpent += 1000;
// } while (cardLimit >= 1000)

let iterationsCount = 0;
while (true) {
  iterationsCount++;
  const rnd3 = Math.random();  // 0 .. 0.999999999
  const number = Math.round(rnd3 * 100);  //  0 .. 100
  console.log(number);
  if (number === 42) {
    break;
  }
}
console.log('iterationsCount = ' + iterationsCount);

console.log('cardLimit = ' + cardLimit);
console.log('moneySpent = ' + moneySpent);

console.log('--------------------------------------');
