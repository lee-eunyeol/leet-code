function twoSum(nums: number[], target: number): number[] {
  const res: number[] = [];
  const hashTable: Record<string, number> = {};

  let index = 0;
  for (const num of nums) {
    const findValue = target - num;

    if (findValue in hashTable) {
      res.push(nums.indexOf(findValue));
      res.push(nums.lastIndexOf(num));
      return res;
    }

    hashTable[nums[index]] = nums[index];
    index++;
  }

  return res;
}
