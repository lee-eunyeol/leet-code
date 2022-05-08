function singleNumber(nums: number[]): number {
    const map = new Map<number, number>();
   for(const num of nums){
        if(!map.has(num)){
            map.set(num,num)
        }
        else{
            map.delete(num)
        }

    }
    let res : number
    for (const item of map.values()){
        res = item
    }
    return res
};