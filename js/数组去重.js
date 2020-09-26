let arr = [1, 2, 3, 4, 5, 5, 3, 2, 1,11,18,32];

function removeRepeat(arr) {
    let newArr = [];

    //排序数组
    arr.sort();

    //当前值
    let curr = null;

    for (let i = 0; i < arr.length; i++) {
        if (curr===arr[i]){
            continue;
        }

        curr = arr[i];
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(removeRepeat(arr));
