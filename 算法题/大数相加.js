function addBigNum(a,b){
  let res = ''
      loc = 0
  a = a.split('')
  b = b.split('')
  while(a.length || b.length || loc){
    //~~把字符串转换为数字，用~~而不用parseInt，是因为~~可以将undefined转换为0，当a或b数组超限，不用再判断undefined
    //注意这里的+=，每次都加了loc本身，loc为true，相当于加1，loc为false，相当于加0
    loc += ~~a.pop() + ~~b.pop()
    //字符串连接，将个位加到res头部
    res = (loc % 10) + res
    //当个位数和大于9，产生进位，需要往res头部继续加1，此时loc变为true，true + 任何数字，true会被转换为1
    loc = loc > 9
  }
  return res.replace(/^0+/,'')
}

console.log(addBigNum('3444536278372637827362738273672834','111111111111111114567898765678'))

function fun(){
  var num = 1;
  return function () {
    console.log(++num)
  }
}

var count = fun()
count()
count()
count()

