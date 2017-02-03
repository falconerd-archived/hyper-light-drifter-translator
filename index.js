/**
 * A/O = 0
 * B/H = 1
 * C = 2
 * D/T = 3
 * E/U = 4
 * F/V = 5
 * G/K = 6
 * I/Y = 7
 * L = 8
 * M/N = 9
 * P = 10
 * R/W = 11
 * S = 12
 * & = 13
 * , = 14
 * . = 15
 */

var letterArray = [
  "A/O", "B/H", "C", "D/T", "E/U", "F/V", "G/K", "I/Y", "L", "M/N", "P", "R/W",
   "S", "&", ",", "."
];
// We may use this? Who knows.
var letterMap = {
  0: "A/O", 1: "B/H", 2: "C", 3: "D/T", 4: "E/U", 5: "F/V", 6: "G/K", 7: "I/Y", 8: "L", 9: "M/N", 10: "P", 11: "R/W", 12: "S", 13: "&", 14: ",", 15: "."
};

var inputArea = document.getElementById("input");
var outputArea = document.getElementById("output");

// We need to make some buttons for input with the symbols on them...
// Let's just use standard html... Time to make an index.html hahahaha
// Let's make the buttons do things, I guess
function onPressGlyphButton(id) {
  inputArea.value = inputArea.value + (inputArea.value ? ' ' : '') + letterArray[id];
  lastGlyphLength = letterArray[id].length;
}

function onPressClearButton() {
  inputArea.value = '';
}

function onPressDeleteButton() {
  inputArea.value = inputArea.value.split(' ').slice(0, -1).join(' ');
}

function onPressGoButton() {
  var toDecode = inputArea.value.split(' ');
  var arrayForm = [];
  toDecode.forEach(function(letter) {
    if (letter.length == 1) {
      arrayForm.push([letter]);
    } else {
      arrayForm.push(letter.split('/'));
    }
  });
  var variants = getVariants(arrayForm);
  console.log(variants);
  variants.forEach(function(variant) {
    var result = [];
    // Now we need to split the variants at each letter and see if that is a
    // word...
    var word = '';
    for (var i = 0; i < variant.length; i++) {
      word += variant[i];
      console.log('CHECKING WORD: ', word);
      if (words[word.toLowerCase()]) {
        result.push(word);
        word = '';
      }
    }

    // console.log(variant, result.join(''));
    if (result.join('').length == variant.length) {
      outputArea.value += result.join(' ') + '\n\n';
    }
  });
}

function getVariants(array, prefix) {
  prefix = prefix || '';
  if (!array.length) {
    return prefix;
  }

  var result = array[0].reduce(function (result, value) {
    return result.concat(getVariants(array.slice(1), prefix + value));
  }, []);
  return result;
}
