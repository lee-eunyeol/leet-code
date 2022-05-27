function isUgly(n: number): boolean {
    if (n<=0) return false
  while (true) {
    if (n % 5 === 0) {
      n = n / 5;
      continue;
    }
    if (n % 3 === 0) {
      n = n / 3;
      continue;
    }
    if (n % 2 === 0) {
      n = n / 2;
      continue;
    }

    if (n === 1) return true;

    return false;
  }
}
