/**
 *1. 编写一个函数来查找字符串数组中的最长公共前缀。 如果不存在公共前缀，返回空字符串。
 例如：输入：["flow", "fly“, "flower"]  输出： "fl"
 */

function searchMax(arr){
  if(!arr.length) return '';
  let result = '';
  let base = arr[0]
  for(let i = 0; i< base.length; i++) {
    for(let j = 1; j < arr.length; j++) {
      if(arr[j].charAt(i) !== base[i] ) {
        return result
      }
    }
    result += base[i]
  }
  return result;
}
let result = searchMax(["flow", "fly", "flower"])
console.log(result)
