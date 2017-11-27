var sentence = prompt("Please enter a sentence");
alert(sentence);

var endcaps = function(sentence){
  return sentence.charAt(0).toUpperCase() + sentence.charAt(sentence.length-1).toUpperCase()
};

alert(endcaps(sentence));
