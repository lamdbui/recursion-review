// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var results = [];
  (function nodeRecurse(node) {
    if (node.classList.contains(className)) {
      results.push(node);
    }
    node.childNodes.forEach(function(childNode) {
      if (childNode.classList) {
        nodeRecurse(childNode);
      }
    }); 
  })(document.body);  

  return results;
};
