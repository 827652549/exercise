let obj =
  {
    value:1,
    id:0,
    left:{
      value:2,
      id:1,
    },
    right:{
      value:3,
      id:2
    }
  }

let demoResult = [
  {value:1,id:0,left:1,right:2},
  {value:2,id:1},
  {value:2,id:2}

]


let arr = []
function _flatten(root){
  let currObj = {value:root.value,
    id:root.id};
  if (root.left !== undefined){
    currObj.left = root.left
    _flatten(root.left)
  }
  if (root.right !== undefined){
    currObj.right = root.right
    _flatten(root.right)
  }
  arr.push(currObj)
}
_flatten(obj)

console.log(arr)

function reconstruct(arr){
  let arrCopy = JSON.parse(JSON.stringify(arr))
  arrCopy.sort((a,b)=>{
    if (a.id<b.id){
      return -1
    }else if (a.id >b.id){
      return +1
    }else {
      return 0
    }
  })
  let obj = {}

}


reconstruct(arr)
//优化 id可以自动生成

function reOrderArray(array)
{
  let count = 0
  for(let i = 0 ; i<array.length-count;i++){
    //判断偶数
    if(array[i]%2===0){
      let currValue = array[i]
      console.log('..',currValue)
      //后面的数组整体前置
      for(let j = i ; j < array.length - i;j++){
        array[j] = array[j+1]
      }
      array[array.length-1] = currValue
      count++
    }
  }
  return array
}

let my = [1,2,3,4,5,6]
console.log(
  reOrderArray(my)
)
