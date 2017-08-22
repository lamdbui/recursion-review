// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

var position = 1;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  //each function call, call nextChar, pass nextChar character reference to string that which you test;

  // detect grammar section type
  
};

var valueFinder = function(json) {

  //if ()
  //nextChar(position)
};

var numberType = function(number) {
  var final = '';
  console.log(!isNaN(parseInt(peekChar(number))));
  while (!isNaN(parseInt(peekChar(number))) || typeof parseInt(peekChar(number)) === 'number' || peekChar(number) === '.' || peekChar(number) === '-') {
    final += number[position - 1];
    nextChar(number);
  }
  return Number(final);

};

var stringType = function(string) {
  var final = '';
  while (nextChar(string) !== '"') {
    final += string[position - 1];
  }
  return final;
};
var peekChar = function(jsonStr) {
  return jsonStr.charAt(position);
};
// TODO: remove dependency of passing in jsonStr each time
var nextChar = function(jsonStr) {
  return jsonStr.charAt(position++);
};

// var nextChar = function(jsonStr) {
//   let position = 0;
//   //return position++;
//   return function() {
//     return jsonStr.charAt(position++);
//     //position++;
//   }

// };