function searchInsert(nums: number[], target: number): number {
  let index = 0;
  while (index < nums.length) {
    if (nums[index] === target || nums[index] > target) return index;
    index++;
  }
  return index;
}
