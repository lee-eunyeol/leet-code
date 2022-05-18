function isPowerOfThree(n: number): boolean {
  if (n === 1) return true;
  else if (n % 5 === 0) return false;
  else if (n % 3 === 0) return isPowerOfThree(n / 3);
  else return false;
}
