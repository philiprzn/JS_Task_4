function insertStr(str, insStr,  position) {

  var arr = str.split(' ');
  // var insArr = insStr.split(' ');
  arr.splice(position, 0, insStr);

  var newStr = arr.join(' ');


  return newStr;

}


console.log(insertStr('I am cool !' ,'very very', 2));
