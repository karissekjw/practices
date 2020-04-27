function sherlockAndAnagrams(s) {
  var substring, remainingString;
  var total_anagrams = 0;
  var is_finish = false;
  var index = 0;
  var end_index = 1;
  var string = s.substring(index, end_index);
  while (s.length > 1) {
    for (var j = 1; j < s.length; j++) {
      substring = s.substring(j, j + string.length);
      remainingString = s.substring(index, s.length);

      if (string.length > substring.length) break;

      if (string == substring || checkAnagram(string, substring)) {
        total_anagrams++;
      }
    }

    end_index++;
    string = s.substring(index, end_index);

    if (string == remainingString) {
      end_index = 1;
      s = s.substring(1, s.length);
      string = s.substring(index, end_index);
    }
  }
  return total_anagrams;
}


function checkAnagram(string, substring) {
  var ch_exist = 0;
  var ch_obj = {};
  string = string.split("");
  substring = substring.split("");
  substring.forEach((ch) => {
    if (ch in ch_obj) {
      ch_obj[ch] += 1;
    } else {
      ch_obj[ch] = 1;
    }
  })

  string.forEach((ch) => {
    if (ch_obj[ch] > 0) {
      ch_obj[ch] -= 1;
      ch_exist++;
    }
  })
  return ch_exist == string.length;
}

console.log("------Test case 1------");
console.log("Result: " + sherlockAndAnagrams("abba"));
console.log("Expected output: 4");

console.log("------Test case 2------");
console.log("Result: " + sherlockAndAnagrams("abcd"));
console.log("Expected output: 0");

console.log("------Test case 3------");
console.log("Result: " + sherlockAndAnagrams("ifailuhkqq"));
console.log("Expected output: 3");

console.log("------Test case 4------");
console.log("Result: " + sherlockAndAnagrams("kkkk"));
console.log("Expected output: 10");

console.log("------Test case 5------");
console.log("Result: " + sherlockAndAnagrams("cdcd"));
console.log("Expected output: 5");