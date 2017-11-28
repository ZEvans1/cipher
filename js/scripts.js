var sentence = prompt("Please enter a sentence");

var endcaps = function(sentence){
  return sentence.charAt(0).toUpperCase() + sentence.charAt(sentence.length-1).toUpperCase()
};

alert(endcaps(sentence));

var reversed = function(sentence){
  return endcaps(sentence).charAt(1) + endcaps(sentence).charAt(0);
  //var splitReverse = endcaps(sentence).split("");
  //var reverseReverse = splitReverse.reverse();
  //var joinReverse = reverseReverse.join("");
  //return joinReverse;
};

alert(reversed(sentence));
