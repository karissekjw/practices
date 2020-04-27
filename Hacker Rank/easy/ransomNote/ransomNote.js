function checkMagazine(magazine, note) {
  var word_mag = {};
  var words_fulfilled = 0;
  magazine = magazine.split(" ");
  note = note.split(" ");
  magazine.forEach((word) => {
    if (word in word_mag) {
      word_mag[word] += 1;
    } else {
      word_mag[word] = 1;
    }
  });
  note.forEach((word) => {
    if (word in word_mag && word_mag[word] > 0) {
      words_fulfilled += 1;
      word_mag[word] -= 1;
    }
  });
  if (words_fulfilled == note.length) {
    return "Yes";
  }
  return "No";
}

console.log("------Test case 1------");
console.log("Result: " + checkMagazine("give me one grand today night", "give one grand today"));
console.log("Expected output: Yes");

console.log("------Test case 2------");
console.log("Result: " + checkMagazine("two times three is not four", "two times two is four"));
console.log("Expected output: No");

console.log("------Test case 3------");
console.log("Result: " + checkMagazine("ive got a lovely bunch of coconuts", "ive got some coconuts"));
console.log("Expected output: No");

// console.log("------Test case 4------");
// console.log("Result: " + checkMagazine());
// console.log("Expected output: 5");