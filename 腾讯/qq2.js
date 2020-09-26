// let line1=readline()

function fun(){
  let line1='{"1":222,"5":234,"8":456}'
  const json = JSON.parse(line1)

  let result = []

  let keys = Object.keys(json)
  let values = Object.values(json)

  let currIndex = parseInt(keys[0])-1

  for (let i = 0; i < currIndex; i++) {
    result.push(0)
  }

  currIndex = 0

  keys.forEach((e,index)=>{
    if (parseInt(e)-1>currIndex){
      for (let i = 0; i < parseInt(e)-1-currIndex; i++) {
        result.push(0)
      }
      result.push(values[index])
      currIndex = index+1
    }else {
      result.push(values[index])
      currIndex++
    }
  })
  return '['+result+']'
}

console.log(fun())
