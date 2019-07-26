function letterChanges(str) {
  return str.replace(/[a-z]/gi, function(i) {
    let newString = String.fromCharCode(i.charCodeAt(0) + 1);
    if (/[aeiou]/.test(newString)) {
      newString = newString.toUpperCase();
    }
    return i === 'z' ? 'A' : newString;
  });
}






console.log(letterChanges('i love code az h'))
console.log(letterChanges('hello*3'))
console.log(letterChanges('a confusing /:sentence:/[ this is not!!!!!!!~'))
