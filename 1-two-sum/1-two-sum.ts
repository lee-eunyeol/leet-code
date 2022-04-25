function twoSum(nums: number[], target: number): number[] {
  const res: number[] = [];
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    const firstValue = nums.shift();
    const findValue = target - firstValue;
    const a = nums.findIndex((element) => element === findValue);
    if (a !== -1) {
      res.push(i, a+i+1);
      break;
    }
  }
  return res;
}
