/**
 * 给定一个整数数组 a，实现一个函数 countMax(a) ，计算出从 a 中选择出多个不相邻元素组成最大的
 和是多少。
 * @param a
 */
function countMax(a){
    if (a.length===0){return 0};
    if (a.length===1){return a[0]};

    let max = Number.MIN_VALUE;
    let temp1 = 0,temp2=0;
    for (let i = 0; i < a.length; i+=2) {
        temp1+=a[i];
    }
    for (let i = 1; i < a.length; i+=2) {
        temp2+=a[i];
    }
    console.log(max);
    console.log(temp1);
    console.log(temp2);
    max = Math.max(max,temp1,temp2);
    return max;
}



let x = [1, 4, 5, 3] ;
// console.log(countMax(x));
countMax(x); // 7
var y = [3, 12, 6, 2, 4] ;
// console.log(countMax(y));// 16
countMax(y);
