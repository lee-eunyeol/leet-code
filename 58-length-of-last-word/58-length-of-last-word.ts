function lengthOfLastWord(s: string): number {
  let count = 0;
  let toggle = false;
  let index = s.length - 1;
  if (s.length === 1) return 1;
  while (index !== -1) {
    if (s[index] === ' ') {
      if (toggle) break;
      index--;
    } else {
      toggle = true;
      count++;
      index--;
    }
  }
  return count;
}
