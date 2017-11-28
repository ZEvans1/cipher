var sentence = prompt("Please enter a sentence");

var endcaps = function(sentence){
  return sentence.charAt(0).toUpperCase() + sentence.charAt(sentence.length-1).toUpperCase()
};

alert(endcaps(sentence));

var oldandrev = function(sentence){
  return sentence + endcaps(sentence).charAt(1) + endcaps(sentence).charAt(0);
  //var splitReverse = endcaps(sentence).split("");
  //var reverseReverse = splitReverse.reverse();
  //var joinReverse = reverseReverse.join("");
  //return joinReverse;

};

alert(oldandrev(sentence));

var count = function(sentence){
  alert(sentence.charAt(sentence.length/2));
  return sentence.charAt(sentence.length/2) + oldandrev(sentence);
};

alert(count(sentence));


}
