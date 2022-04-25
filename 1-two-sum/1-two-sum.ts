function twoSum(nums: number[], target: number): number[] {
  const res: number[] = [];
  const hashTable: Record<string, number> = {};

  let index = 0;
  for (const num of nums) {
    const findValue = target - num;

    if (findValue in hashTable) {
      res.push(hashTable[findValue]);
      res.push(index);
      return res;
    }

    hashTable[nums[index]] = index;
    index++;
  }

  return res;
}
