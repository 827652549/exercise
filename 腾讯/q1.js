// 实现一个函数 reverse(a, n) ，反转一个含有 n 个整数的数组 a(直接在数组a上操作，元素交换次数
// 尽可能少，不能使用js Array 类内置属性和方法)。

/**
 * @param a
 * @param n
 */
function reverse(a,n) {
    let leftIndex = 0,rightIndex = n-1,temp;
    while (leftIndex<=n/2) {
        temp = a[leftIndex];
        a[leftIndex] = a[rightIndex];
        a[rightIndex] = temp;
        leftIndex++;
        rightIndex--;
    }
}

var x = [0, 1, 2, 3];
reverse(x, 4);
console.log(x);

var y = [1, 2, 3, 4, 1];
reverse(y, 5) ;// y = [1, 4, 3, 2, 1]
console.log(y);

