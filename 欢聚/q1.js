/**
 * 相同的字符最小间隔数
 * @param str string字符串
 * @return int整型
 */
function count( str='我是中国人，我就是中国人' ) {
  // write code here
  let set = new Set();
  for (let i = 0; i < str.length; i++) {
    set.add(str[i])
  }
  let minLen = Number.MAX_VALUE;
  set.forEach(e=>{
    let currIndexArr = []
    for (let i = 0; i < str.length; i++) {
      if (e===str[i]){
        currIndexArr.push(i)
      }
    }
    let currLen = calMinLen(currIndexArr);
    minLen = currLen < minLen ? currLen : minLen;
  })

  if (minLen===Number.MAX_VALUE){
    minLen=-1;
  }
  console.log(minLen)
  return minLen;
}

function calMinLen(arr){
  let minLen = Number.MAX_VALUE;
  let datle = [];
  if (arr.length===0 || arr.length===1){
    return minLen
  }else {
    for (let i = 0; i < arr.length-1; i++) {
      datle.push(Math.abs(arr[i]-arr[i+1]))
    }
  }
  datle.sort();
  return datle[0]-1
}
count()

// module.exports = {
//   count : count
// };
