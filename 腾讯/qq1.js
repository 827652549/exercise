// let line1=readline()
// let line2=readline()
// let line1='1,2,4'
// let line2='1,3,4'

function fun(){
  let line1='1,13,2,16,4,5'
  let line2='2,5,34'
  if((line1+line2).length===0){
    return ''
  }else if (line1.length>0 && line2.length>0){
    let arr1 = line1.split(",");
    let arr2 = line2.split(",");

    arr1 = arr1.map(e=>{
      return parseInt(e)
    })

    arr2 = arr2.map(e=>{
      return parseInt(e)
    })

    let result = arr1.concat(arr2)
    result = result.sort((a,b)=>{
      if (a>b){
        return 1
      }else if (a<b){
        return -1
      }else {
        return 0
      }
    })
    return result
  }else if (line1.length>0 && line2.length===0){
    return line1
  }else {
    return line2
  }

}

console.log(fun())
