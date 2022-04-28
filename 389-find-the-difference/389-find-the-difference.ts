/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function (s, t) {
  let a = 0,
    b = 0;
  let i = 0;
  while (s[i]) {
    a ^= s.charCodeAt(i).toString(2);
    b ^= t.charCodeAt(i).toString(2);
    i++;
  }
  b ^= t.charCodeAt(i).toString(2);
  const charCode = parseInt((a ^ b).toString(), 2);
  return String.fromCharCode(charCode);
};
