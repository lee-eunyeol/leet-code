function isPowerOfThree(n: number): boolean {
  if (n<=0) return false;
  while (n > 1) {
    const least = n % 3;
    if (least !== 0) return false;
    n = n / 3 - least;
  }
  return true
}
