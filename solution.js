// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

function longest(s1, s2) {
  // your code
  var s3 = s1.concat(s2)
  s3 = [...new Set(s3)];
  s3 = s3.sort()
  s3 = s3.join('')
  return s3
}
