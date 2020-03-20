let arr1 = [1, 2, 3, 44, -2, 3, 1];
let arr2 = [7, -2, -3, -44, -72, 39, 1];

let arrNew = arr1.concat(arr2).sort(function (a, b) {
    return a-b;
});


console.log(arrNew);
