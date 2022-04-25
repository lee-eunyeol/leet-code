
/*
* 1. 받은 인자의 개수만큼 반복문을 돌린다.
* 2. 반복문
* i = 파스칼 삼각형의 row
* j = 파스칼 row의 요소리스트를 구하는 변수
*/
function generate(numRows: number): number[][] {
    const res : number[][] = [[1]];
    for (let i = 1; i< numRows; i++){
        const pastList = res[i-1];
        const nextList = []
        for(let k = -1; k < pastList.length ;k++){
            const past = pastList[k] || 0;
            const next = pastList[k+1] || 0;
            nextList.push(past+next);
    
        }
        res.push(nextList);
        
    }
    return res;
};

