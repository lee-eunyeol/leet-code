function plusOne(digits: number[]): number[] {
  let index = digits.length - 1;
  while (index >= 0) {
    const data = digits[index]+1;
    if (data === 10) {
      digits[index] = 0;
      if (index === 0) {
        digits.unshift(1);
      }
    } else {
      digits[index] = data;
      break;
    }
    index--;
  }
  return digits;
}
