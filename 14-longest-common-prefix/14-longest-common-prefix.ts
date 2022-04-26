/**
 *
 */

function longestCommonPrefix(strs: string[]): string {
  const firstString = strs.pop();
  let res = '';
  let stringIndex = 0;
  if (strs.length === 0) return firstString;
  Loop1: for (const spelling of firstString) {
    Loop2: for (let index = 0; index < strs.length; index++) {
      if (strs[index]?.charAt(stringIndex) === spelling) {
        if (index === strs.length - 1) {
          res += spelling;
        }
      } else {
          console.log('break Loop1')
        break Loop1;
      }
    }
    stringIndex++;
  }

  return res;
}
