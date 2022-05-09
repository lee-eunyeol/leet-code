function hammingWeight(n: number): number {
  let count = 0;

  if (n === 0) return 0;
  let data = n;
  while (data >= 1) {
    if (data % 2 === 1) {
      count++;
      data = data / 2 - 0.5;
    } else {
      data = data / 2;
    }
  }
  return count
}
