export function checkLength (_number: number){
    let count:number = 0;
    while(_number>0){
        _number=_number/10|0;
        count++;
    }
    return count;
}