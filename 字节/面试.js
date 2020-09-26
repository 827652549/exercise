/**
 * 思路：创建闭包，将变量保存在内存中，
 * 如果直接输出，则重写toString()返回结果
 * 如果通过print()则写成函数属性
 * @param num
 * @returns {function(*): function(*)}
 */
function add (num) {
  let total = num

  function _add (n) {
    total += n
    return _add
  }

  // 直接返回最终结果
  _add.toString = function () {
    return total
  }

  // 通过print()返回最终结果
  _add.print = function () {
    return total
  }

  return _add
}

console.log(add(1)(2)(3).print())//6
console.log(add(1)(2)(3))//6
console.log(add(1)(2))//3

const o = {
  a: {
    b: {
      c: 1,
    },
  },
}
console.log(get(o, 'a.b.c'))  //1

function get (obj, str) {
  let arr = str.split('.')
  let result = JSON.parse(JSON.stringify(obj))
  for (let i = 0; i < arr.length; i++) {
    // console.log(result[arr[i]])
    result = result[arr[i]]
  }
  return result
}

// requests(queue,n){}

// function requsets () {
//   requsets
// }


/**
 * @params list {Array} - 要迭代的数组
 * @params limit {Number} - 并发数量控制数
 * @params asyncHandle {Function} - 对`list`的每一个项的处理函数，参数为当前处理项，必须 return 一个Promise来确定是否继续进行迭代
 * @return {Promise} - 返回一个 Promise 值来确认所有数据是否迭代完成
 */
let mapLimit = (list, limit, asyncHandle) => {
  let recursion = (arr) => {
    return asyncHandle(arr.shift()).then(() => {
      if (arr.length !== 0) return recursion(arr)   // 数组还未迭代完，递归继续进行迭代
      else return 'finish'
    })
  }

  let listCopy = [].concat(list)
  let asyncList = [] // 正在进行的所有并发异步操作
  while (limit--) {
    asyncList.push(recursion(listCopy))
  }
  return Promise.all(asyncList)  // 所有并发异步操作都完成后，本次并发控制迭代完成
}

/**
 * 以下是测试
 * @type {number[]}
 */

let list = [1, 2, 3, 4, 5,4,333,222,122,23,54,64]
let limit = 3//限制的并发数量
let count = 0//记数当前并发量

let callback = (curItem) => {
  return new Promise(resolve => {
    count++
    setTimeout(() => {
      console.log(curItem, '当前并发量:', count--)
      resolve()
    }, Math.random() * 5000)
  })
}

mapLimit(list, limit, callback)
//完成之后
  .then(()=>{
    console.log('所有并发执行完成')
  })
