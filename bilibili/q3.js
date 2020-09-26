function fractionToDecimal( numerator ,  denominator ) {
  // write code here
  let result = parseFloat(numerator)/parseFloat(denominator)

  let str = ''
  let circle = ''
  str='0.'

  let isFu = false
  if ((numerator < 0 && denominator>0)||(numerator > 0 && denominator<0)){
    isFu = true
    numerator = Math.abs(numerator)
    denominator = Math.abs(denominator)
  }else if (numerator < 0 && denominator<0){
    isFu = false
    numerator = Math.abs(numerator)
    denominator = Math.abs(denominator)
  }
  if(numerator===denominator){
    return 1
  }else if (numerator>denominator){
    str = (numerator - (numerator%denominator))/denominator+'.'
    numerator = numerator%denominator
  }
    while (true){
      if((numerator*10)%denominator===0){
        str+=(numerator*10)/denominator
        if (isFu){
          str = '-'+str
        }
        return str
      }else {
        if (circle.length>0 && circle.length%2===0){
            if (circle.substring(0,circle.length/2)===circle.substring(circle.length/2,circle.length)){
              str = str.substring(0,str.length-circle.length)
              str+='('+circle.substring(0,circle.length/2)+')'
              if (isFu){
                str = '-'+str
              }
              return str
            }
        }
        let item = ((numerator*10-(numerator*10)%denominator)/denominator)
        // for (let i = 0; i < circle; i++) {
        //   if (circle.length!==0 && circle[0]===item+''){
        //     str =  str.substring(0,str.length-circle.length)
        //     item = '('+circle+')'
        //     str+=item
        //     return str
        //   }
        // }
        circle+=item
        str+=item
        numerator = (numerator*10)%denominator
      }
    }
  if (isFu){
    str = '-'+str
  }
  return str
}

console.log(fractionToDecimal(-1,2))
console.log(fractionToDecimal(2,3))
console.log(fractionToDecimal(5,3))
console.log(fractionToDecimal(53,7))
console.log(fractionToDecimal(2112,17))

