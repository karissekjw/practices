// function minimumBribes(q) {
//   var this_q = Array.from(q);
//   var expected_q = q.sort();
//   var currentPos = 0;
//   var min_bribe = 0;
//   var is_same = false;
//   while (!is_same) {
//     var currentNum = this_q[currentPos];
//     var expectedPos = currentPos + 1;
//     //check if currentNum is in expectedPos
//     if (currentNum != expectedPos) {
//       //if not in expectedPos
//       var nextNum = this_q[currentPos + 1];
//       //check if currentNum is required to bribe more than 2 people
//       if (currentNum - 1 - currentPos > 2) return "Too chaotic";
//
//       if (nextNum - 1 == currentPos || currentNum - 1 == currentPos + 1) { //if required to bribe 1 person
//         if (nextNum < currentNum) {
//           this_q[currentPos] = nextNum;
//           this_q[currentPos + 1] = currentNum;
//           min_bribe += 1;
//         }
//
//       } else if (currentNum - 1 == currentPos + 2) { //if required to bribe 2 people
//         var nextNextNum = this_q[currentPos + 2];
//         if (nextNextNum < currentNum) {
//           this_q[currentPos] = nextNextNum;
//           this_q[currentPos + 2] = currentNum;
//           min_bribe += 2;
//         }
//       }
//     }
//     currentPos += 1;
//     is_same = checkQueue(expected_q, this_q);
//     if (currentPos == q.length) currentPos = 0;
//   }
//   return min_bribe;
// }

function minimumBribes(queue) {
  var bribes = 0,
    i, j;
  for (i = 0; i < queue.length; i++) {
    const pos = queue[i]
    const expectedPos = i + 1;
    if (pos - expectedPos > 2) {
      return "Too chaotic"
    }
    for (j = Math.max(0, pos - 2); j < i; j++) {
      if (queue[j] > pos) {
        bribes++
      }
    }
  }
  return bribes;
}

function checkQueue(expected_q, current_q) {
  for (var i = 0; i < expected_q.length; i++) {
    if (expected_q[i] != current_q[i]) return false;
  }
  return true;
}

console.log("------Test case 1------");
console.log("Result: " + minimumBribes([2, 1, 5, 3, 4]));
console.log("Expected output: 3");

console.log("------Test case 2------");
console.log("Result: " + minimumBribes([2, 5, 1, 3, 4]));
console.log("Expected output: Too chaotic");

console.log("------Test case 3------");
console.log("Result: " + minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]));
console.log("Expected output: Too chaotic");

console.log("------Test case 4------");
console.log("Result: " + minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]));
console.log("Expected output: 7");

console.log("------Test case 5------");
console.log("Result: " + minimumBribes([1, 2, 5, 3, 4, 7, 8, 6]));
console.log("Expected output: 4");