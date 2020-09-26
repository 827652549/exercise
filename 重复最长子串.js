let str1 = 'abcxabc'//-1
let str2 = 'aaaabcabcdd'//abcabc
let str3 = 'fyeo12abcabc4d'//abcabc
fun(str1)
fun(str2)
fun(str3)
function fun(str){
  let max = -1
  let result = ''
  let arr = str.match(/(\w+)\1/g)
  if(arr!==null){
    arr.forEach(e=>{
      result = max > e.length ? result:e
      max = max > e.length ? max :e.length
    })
    console.log(arr[0])
  }else {
    console.log(-1)
  }
}

// if(arr.length)
// arr.forEach(e=>{
//   max = e.length
// })

// class Scheduler {
//   constructor(maxNum) {
//     this.taskList = [];
//     this.count = 0;
//     this.maxNum = maxNum;
//   }
//   async add(promiseCreator) {
//     if (this.count >= this.maxNum) {
//       await new Promise((resolve) => {
//         this.taskList.push(resolve)
//       })
//     }
//     this.count ++;
//     const result = await promiseCreator();
//     this.count --;
//     if (this.taskList.length > 0) {
//       this.taskList.shift()();
//     }
//     return result;
//   }
// }
//
//
// // timeout 是一个函数，接受一个参数time， 返回一个promise，在time事件之后才会resolve
// const timeout = (time) => new Promise(resolve => {
//   setTimeout(resolve, time)
// })
//
// const scheduler = new Scheduler(2)
//
// const addTask = (time, order) => {
//   // scheduler.add 传入一个函数，这个函数返回一个Promise
//   scheduler.add(() => timeout(time)).then(() => console.log(order))
// }
//
// addTask(1000, '1')
// addTask(500, '2')
// addTask(300, '3')
// addTask(400, '4')
//
// // 设计一个 Scheduler 类，实现 Promise 的并发控制，最多同时执行两个任务
// // 上面代码输出的顺序应该如下：
// // 2
// // 3
// // 1
// // 4
//
//
