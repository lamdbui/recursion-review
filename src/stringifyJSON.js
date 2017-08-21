// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // String case
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  // Array case
  if (Array.isArray(obj)) {
    var results = [];
    obj.forEach(item=> {
      results.push(stringifyJSON(item));
    });
    return '[' + results.join(',') + ']';
  }
  // Object case
  if ((obj !== null) && typeof obj === 'object') {
    var results = [];
    for (var key in obj) {
      var value = obj[key];
      if (value !== undefined && typeof value !== 'function') {
        results.push([stringifyJSON(key), stringifyJSON(value)].join(':'));
      }
    }
    return '{' + results.join(',') + '}';
  }
  // Base case
  return '' + obj;
};
