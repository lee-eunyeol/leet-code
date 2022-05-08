function addDigits(num: number): number {
    if(num<10) return num
    let temp = num
    while(true){
        temp = temp.toString().split('').map(Number).reduce((a,b) =>a+b)
        if(temp <10) return temp
    }
};