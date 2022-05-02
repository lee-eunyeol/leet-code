function countBits(n: number): number[] {
  const res: number[] = [];
  for (let i = 0; i <= n; i++) {
    res.push(countChar(i.toString(2)));
  }
  return res;
}

function countChar(str: string): number {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === '1') {
      count++;
    }
  }
  return count;
}
