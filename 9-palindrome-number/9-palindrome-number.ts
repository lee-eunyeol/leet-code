function isPalindrome(x: number): boolean {
     if (x < 0) return false;
  const split = x.toString().split('');
    const length  = split.length
  for (let i = 0; i < length / 2; i++) {
    if (split[i] !== split[length - i-1]) {
      return false;
    }
  }
  return true
}
