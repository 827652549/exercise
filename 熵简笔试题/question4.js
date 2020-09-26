/**
 * 4、实现一个findStr函数，接受一个字符串数组，返回最长的重复字符串
 * findStr(['aecb','dcbc','fcbg','ca']) // 返回值为 'cb'
 */
function findStr (arr) {
  let set = new Set()
  arr.forEach(e=>{
    _handleStr(set,e)
  })
  //去重后的所有子串
  let sonArr = [...set]
  let currSonStr = ''
  sonArr.forEach(e=>{
    let isAllMatch = true;
    arr.forEach(item=>{
      if (item.indexOf(e)===-1){
          isAllMatch = false
      }
    })
    if (isAllMatch===true){
      currSonStr = currSonStr.length > e.length ? currSonStr : e
    }
  })

  return currSonStr
}

/**
 * 将字符串组合在set中去重
 * @private
 */
function _handleStr(set,e){
  let len = e.length
  let currSonLen = 1;
  while (currSonLen<=len){
    for (let i = 0; i < len; i++) {
      let temp = ''
      for (let j = 0; j < currSonLen; j++) {
        if (e[i+j]!==undefined){
          temp+=e[i+j]
        }
      }
      set.add(temp)
    }
    currSonLen++
  }
}

console.log(findStr(['aecb','dcbc','fcbg']))
