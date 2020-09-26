function getMinDistance( arrs = [[0,0],[5,0],[2,0],[3,5]] ) {
  // write code here
  let middleArr = []

  for (let i = 0; i < arrs.length-1; i++) {
    for (let j = i+1; j < arrs.length; j++) {
      middleArr.push([arrs[i],arrs[j]])
    }
  }
  // console.log(middleArr)

  let min = Number.MAX_VALUE
  middleArr.forEach(e=>{
    let currNum = Math.sqrt(Math.pow(e[0][0]-e[1][0],2.0)+Math.pow(e[0][1]-e[1][1],2.0))
    console.log(currNum)
    min = currNum < min ? currNum : min
  })
  // console.log(min)
  return Math.round(min)
}
getMinDistance()
