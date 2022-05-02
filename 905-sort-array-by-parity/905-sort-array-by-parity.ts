function sortArrayByParity(nums: number[]): number[] {
  const result: number[] = [];
  const result2: number[] = [];
  while (nums.length !== 0) {
    if (nums[0] % 2 === 0) {
      result.push(nums.shift());
    } else {
      result2.push(nums.shift());
    }
  }
  return [...result,...result2];
}
