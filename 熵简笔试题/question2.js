let arr = [
  {
    id: 'a',
    value: 1,
    children: [
      {
        id: 'b',
        value: 2,
        children: [
          {
            id: 'c',
            value: 3,
          },
          {
            id: 'd',
            value: 4,
          },
          {
            id: 'e',
            value: 5,
          },
        ],
      },
    ],
  },
  {
    id: 'f',
    value: 3,
  },
  {
    id: 'g',
    value: 4,
    children: [
      {
        id: 'h',
        value: 5,
      },
    ],
  },
]

/**
 * （1）实现一个find函数，接收一个参数value，返回所有满足该值的id数组 find(3); // 返回数组[c,f]
 * @param{Number} value
 */
function find(value){
  let resultArr = []
  arr.forEach(e=>_find(e,value,resultArr))
  return resultArr
}

/**
 * 判断和push匹配的id，并递归children
 * @param obj
 * @param value
 * @param resultArr
 * @private
 */
function _find (obj,value,resultArr) {
  if (obj.value === value){
    resultArr.push(obj.id)
  }
  if (obj.hasOwnProperty('children')){
    obj.children.forEach(e=>_find(e,value,resultArr))
  }
}

/**
 * （2）实现一个group函数，将所有id根据value进行分组返回 group(); // 返回数组 [[a],[b],[c,f],[d,g],[e,h]]
 */
function group () {
  let set  = new Set()
  arr.forEach(e=>_group(e,set))
  let setArr = [...set]
  let result = []
  setArr.forEach(e=>result.push(find(e)))
  return result
}

function _group(obj,set){
  set.add(obj.value)
  if (obj.hasOwnProperty('children')){
    obj.children.forEach(e=>_group(e,set))
  }
}

console.log(find(1))
console.log(find(2))
console.log(find(3))
console.log(find(4))
console.log(find(5))
//异常情况
console.log(find(-1))

console.log(group())
