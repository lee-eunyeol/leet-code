function removeElement(nums: number[], val: number): number {
  return nums.splice(0, nums.length, ...nums.filter((num) => num !== val)).length;
}
