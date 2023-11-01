const maxValues = [10, 100, 1000, 10000, 100000];

for (const item of maxValues) {  // string interpolation
  console.log(`result of calculation with max=${item} is equal to ${calculateFormula(item)}`);
}

let intermediateResult = 0;
for (const item of maxValues) {
  intermediateResult += calculateFormula(item);
}

console.log(intermediateResult);

function calculateFormula(maxValue) {
  const a = getRandomNumber(maxValue);
  const b = getRandomNumber(maxValue);
  const c = getRandomNumber(maxValue);
  const d = getRandomNumber(maxValue);

  const mul = a * b;
  const sum = c + d;
  const result = mul / sum;

  return result;
}

function getRandomNumber(maxValue) {
  const number = Math.round(Math.random() * maxValue);
  console.debug(number);
  return number;
}
