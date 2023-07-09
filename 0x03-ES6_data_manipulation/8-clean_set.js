function cleanSet (set, startString) {
  let arr = [...set];
  for (let i in [...set]) {
    if ([...set][i].startsWith(startString)) {
      arr[i] = arr[i].slice(startString.length);
    }
  }
  return arr.join('-');
}

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
