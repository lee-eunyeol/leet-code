function twoSum(nums: number[], target: number): number[] {
    
    let sum: number[] = [];
    let hashTable: Record<string, number> = {} 

    for(let n in nums)
    {
        let com = target - nums[n];

        if(com in hashTable)
        {
            sum.push(nums.indexOf(com))
            sum.push(nums.lastIndexOf(nums[n]))
            return sum;
        }
        
        hashTable[nums[n]] = nums[n]
    }

    return sum;
};