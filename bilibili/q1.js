function getNumber( n ) {
  let set = new Set()
  // write code here
  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      for (let k = 0; k <= 9; k++) {
        for (let l = 0; l <= 9; l++) {
          for (let m = 0; m <= 9; m++) {
            if ((i*i+j*j+k*k+l*l+m*m)===n){
              set.add([i,j,k,l,m].sort().join(''))
            }
          }
        }
      }
    }
  }
  return parseInt([...set][0])
}

console.log(getNumber(63))
