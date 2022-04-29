function removeDuplicates(nums: number[]): number {
return nums.splice(0, nums.length, ...(new Set(nums))).length;
};