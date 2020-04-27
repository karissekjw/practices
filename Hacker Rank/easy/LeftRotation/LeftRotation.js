'use strict';

const fs = require('fs');

// Complete the rotLeft function below.
function rotLeft(a, d) {
  for (var i = 0; i < d; i++) {
    var currentNum = a[0];
    //swap next number with current position
    for (var j = 0; j < a.length - 1; j++) {
      var nextNum = a[j + 1];
      var newPos = j;
      a[newPos] = nextNum;
    }
    //move firstPos to lastPos
    a[a.length - 1] = currentNum;
  }
  return a.join(" ");
}

function main(fileName) {
  var result;
  fs.readFile("./testcases/input/input" + fileName + '.txt', (err, data) => {
    if (err) throw err;
    data = data.toString();
    var lines = data.split("\n");
    var d;
    var array;
    for (var i = 0; i < lines.length; i++) {
      if (i == 0) {
        var line = lines[i].split(" ");
        d = line[1];
      } else {
        array = lines[i].split(" ");
      }
    }
    result = rotLeft(array, d);
    console.log("Your result: " + result);
  })

  fs.readFile("./testcases/output/output" + fileName + '.txt', (err, data) => {
    if (err) throw err;
    console.log("Expected output: " + data.toString());
    console.log(result == data.toString());
  })

}

// main("00");
// main("01");
main("02");