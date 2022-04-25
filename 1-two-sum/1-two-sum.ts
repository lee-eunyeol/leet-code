/*
 * 1. 리스트 요소에서 target 값 이상인
 *
 */
function twoSum(nums: number[], target: number): number[] {
  const res: number[] = [];
  let firstIndex = 0;
  for (const num of nums) {
    const findValue = target - num;
    const secondIndex = getValue(nums, findValue, firstIndex);
    if (secondIndex !== 0) {
      res.push(firstIndex, secondIndex);
      break;
    }
    firstIndex++;
  }
  return res;
}

const getValue = (nums: number[], findValue: number, firstIndex: number): number => {
  for (let i = firstIndex + 1; i < nums.length + 1; i++) {
    if (nums[i] === findValue) {
      return i;
    }
  }
  return 0;
};
