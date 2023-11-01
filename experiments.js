let a = 40;
function doSomething(b) {
  b = 11;
}
doSomething(a);
console.log(a);

const testArray = [1, 2, 3];
testArray.push(42);
function doSomethingWithArray(c) {
  c[1] = 11;
}
doSomethingWithArray(testArray);
console.log(testArray);

// error
testArray = [4, 5, 6];