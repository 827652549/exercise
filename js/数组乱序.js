let arr  = [1,2,3,4,4,5,6,7,7,5,5,2,3];

/**
 * 数组乱序
 * @param arr
 * @returns {*}
 */
// function fun(arr) {
//
//     let len = arr.length;
//     for (let i = 0; i < len; i++) {
//         let handleIndex = Math.floor(Math.random() * len);
//
//         let temp = arr[i];
//         arr[i] = arr[handleIndex];
//         arr[handleIndex] = temp;
//         temp = arr[i];
//     }
//
//     return arr;
// }


function fun(arr){
    return arr.sort(()=>{
        return Math.random()-0.5;
    })
}
console.log(fun(arr));
