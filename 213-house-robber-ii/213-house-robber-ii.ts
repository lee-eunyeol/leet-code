function rob(nums: number[]): number {
  if (!nums.length) return 0;
  if (nums.length <= 2) return Math.max(...nums);

  const option1 = helper(nums.slice(0, nums.length - 1));
  const option2 = helper(nums.slice(1));
  return Math.max(option1, option2);
}

function helper(nums: number[]): number {
  const dp: number[] = Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }

  return dp[nums.length - 1];
}