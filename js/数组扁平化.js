let arr = [1, 2, 3, [4, 5], [6, [7, 8]],];

//方法一：flat扁平化数组，默认为1
console.log(arr.flat(Infinity));

//方法二：递归
function fun(arr){
    let newArr = [];
    arr.forEach(value => {
        if (Array.isArray(value)){
            newArr = newArr.concat(fun(value));
        }else {
            newArr =newArr.concat(value);
        }
    });
    return newArr;
}

console.log(fun(arr));


