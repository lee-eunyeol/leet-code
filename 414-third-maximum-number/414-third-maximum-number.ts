function thirdMax(nums: number[]): number {
  nums = nums.sort((a,b)=>a-b);
  const realMax = nums.pop();
  let max = realMax;
  let count = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] !== max) {
      max = nums[i];
      count++;
      if (count === 3) break;
    }
  }

  return count === 3 ? max : realMax;
}
