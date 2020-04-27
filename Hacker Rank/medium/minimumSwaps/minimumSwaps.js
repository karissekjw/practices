function minimumSwaps(arr) {
  var total = 0;
  var currentVal, expectedPos, nextNum;
  for (var i = 0; i < arr.length; i++) {
    currentVal = arr[i];
    expectedPos = i + 1;
    for (var j = i + 1; j < arr.length; j++) {
      if (currentVal != expectedPos) {
        nextNum = arr[j];
        if (nextNum == expectedPos) {
          arr[i] = nextNum;
          arr[j] = currentVal;
          total++;
        }
      } else {
        break;
      }
    }
  }
  return total;
}

console.log("------Test case 1------");
console.log("Result: " + minimumSwaps([4, 3, 1, 2]));
console.log("Expected output: 3");

console.log("------Test case 2------");
console.log("Result: " + minimumSwaps([2, 3, 4, 1, 5]));
console.log("Expected output: 3");

console.log("------Test case 3------");
console.log("Result: " + minimumSwaps([1, 3, 5, 2, 4, 6, 7]));
console.log("Expected output: 3");

console.log("------Test case 4------");
console.log("Result: " + minimumSwaps([7, 1, 3, 2, 4, 5, 6]));
console.log("Expected output: 5");