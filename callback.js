//Create an Array
const Numbers = [4, 1, -20, -6, 5, 9, -6];

//Call removeNeg with a callback
const posNumbers = removeNeg(Numbers, (x) => x > 0);

//Display Result
console.log(posNumbers);

//Kepp only positive numbers

function removeNeg(numbers, callback) {
  const Array = [];
  for (const x of numbers) {
    if (callback(x)) {
      Array.push(x);
    }
  }
  return Array;
}
