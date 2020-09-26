/**
 * 生成意思相近句子的集合
 * @param words string字符串二维数组 相似词表
 * @param sentence string字符串 参照的句子
 * @return string字符串一维数组
 */
function generateSentences (words = [
    ['question', 'issue'],
    ['difficult', 'embarrassment']],
  sentence = 'this question is too difficult for me to answer') {
  // write code here
  let arrs = []
  arrs.push(sentence)
  words.forEach(a => {
    //a---['question', 'issue']
    let newArr = JSON.parse(JSON.stringify(a))
    let tempArrs = []
      a.forEach((e) => {
        for (let i = 0; i < arrs.length; i++) {
          if (arrs[i].match(e) !== null) {
            let arr = newArr.filter(ele => e !== ele)
            for (let j = 0; j < arr.length; j++) {
              tempArrs.push(arrs[i].replace(e, arr[j]))
            }
          }
        }

      })
    arrs = arrs.concat(tempArrs)
  })
  // sentence.replace("")
return  arrs.sort();
  // console.log(arrs.sort())
  // console.log(sentence.match('question')!==null)
}

generateSentences()
