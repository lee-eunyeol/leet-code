function hammingWeight(n: number): number {
    return n.toString(2).split('').filter(a => a==='1').length
};