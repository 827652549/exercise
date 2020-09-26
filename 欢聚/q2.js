function rotate( str = "15:10" ) {
  let time = str.split(':')
  let h = parseFloat(time[0])
  let m = parseFloat(time[1])
    if(h>=12){
      h-=12
    }
  return Math.floor(Math.abs((h*30.0 + m*0.5)-(m*6.0)))
  // write code here
}

console.log(rotate())
