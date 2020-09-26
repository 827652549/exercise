/**
 * 3. 给定一个非空字符串s和一个包含非空单词列表的字典wordDict，判定s是否可以被空格拆分为一个或多个在字典中出现的单词。

 例如：s: happiness wordDict: ['hap', 'pin', 'ess'] 返回：true

 */
function fun(s,wordDict){
  wordDict.forEach(e=>{
    let regexp = new RegExp(`${e}`,'g')
    if (s.search(regexp)===-1){
      return false
    }else {
      s = s.replace(regexp,'')
    }
  })
  if (s===''){
    return true
  }else{
    return false
  }
}
console.log(fun('happinesshap',['hap', 'pin', 'ess']))
