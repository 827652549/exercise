function numberofprize( a ,  b ,  c ) {
  // // write code here
  let basic = Math.min(a,b,c)
  a-=basic
  b-=basic
  c-=basic

  let min = Math.min(a,b,c)
  let max = Math.max(a,b,c)
  let mid = a+b+c-max-min

  let resultPrizes = 0

  if(max - mid*2 >=0){
    return basic+((max-mid*2)-(max-mid*2)%5)/5
  }else {
    while(true){
      if (min===0&&(max+mid)<=3){
        return resultPrizes+basic
      }
      if (min>=1){
        resultPrizes++
        min-=1
        max-=1
        mid-=1
      }else {
        if (min===0&&mid===0){
          if (max>=5){
            return (max - max%5)/5+resultPrizes+basic
          }else {
            return resultPrizes+basic
          }
        }else if (mid=>1 &&(max+mid)>=4){
          //假设max间隔>2
          if (max-mid>=2){
            max-=2
            min+=1
          }else {
            max-=1
            mid-=1
            min+=1
          }
        }
      }
    }
  }



}

console.log(numberofprize(4,4,2))
console.log(numberofprize(9,3,3))
console.log(numberofprize(10,0,0))
