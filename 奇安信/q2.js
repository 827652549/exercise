/**
 *
 * @param person int整型一维数组
 * @return int整型
 */
function house( person = [5,4,7,8,5,6] ) {
  if (person.length===0){
    return 0
  }
  // write code here

  let oldPerson = JSON.parse(JSON.stringify(person))
  let currPerson = person.sort();

  let mins = []
  oldPerson.forEach((e,index)=>{
    if (e===currPerson[0]){
      mins.push(index)
    }
  })

  let min  = Number.MAX_VALUE
  for (let i = 0; i <mins.length ; i++) {
    let minIndex = mins[i]
    let leftIndex  = minIndex===0 ? 0 : minIndex-1;
    let rightIndex = minIndex===oldPerson.length-1 ? oldPerson.length-1 : minIndex +1 ;

    let resultArr = new Array(oldPerson.length);
    // let currLeftIndex = minIndex;
    while (!(leftIndex===-1 && rightIndex === oldPerson.length)){

      resultArr[minIndex] = 1;


      while (leftIndex!==-1){
        // console.log('leftIndex',leftIndex)

        if (oldPerson[leftIndex]<=oldPerson[leftIndex+1]){
          if (resultArr[leftIndex+1]-1 >=1){
            resultArr[leftIndex] = 1
          }else {
            resultArr[leftIndex] = 1
          }
        }else if (oldPerson[leftIndex]>oldPerson[leftIndex+1]){
          resultArr[leftIndex] = resultArr[leftIndex+1]+1
        }


        leftIndex-=1
      }

      while (rightIndex !== oldPerson.length){
        // console.log('rightIndex',rightIndex)


        if (oldPerson[rightIndex]>oldPerson[rightIndex-1]){
          resultArr[rightIndex] = resultArr[rightIndex-1]+1
        }else if (oldPerson[rightIndex]<=oldPerson[rightIndex-1]){
          if (resultArr[rightIndex-1]-1>=1){
            resultArr[rightIndex] = 1
          }else {
            resultArr[rightIndex] = 1
          }
        }

        rightIndex+=1

      }

      // console.log(leftIndex===0 && rightIndex ===oldPerson.length-1)
      // console.log(resultArr)

      // console.log(oldPerson)
    }
    let result = resultArr.reduce((total,a)=>{
      total+=a
      return total
    })

    min = result < min ? result :min

    console.log(resultArr)
  }


  console.log(min)


}
house()
