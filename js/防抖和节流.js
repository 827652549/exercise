// 防抖和节流
// 防抖：事件被触发n秒后触发回调，如果在n秒内事件被再次触发，则重新计时

// 简化版？

// 防抖函数
const debounce = (fn, delay) => {
  let timer = null
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
//
// function testfff () {
//
// }
//
// testfff.tId = '123'
//
// console.log(testfff)
// console.log(testfff.tId)


var processor = {
  timeoutId: null,
//实际进行处理的方法
  performProcessing: function () {
    console.log('👌')
//实际执行的代码
  },
//初始处理调用的方法
  process: function () {
    clearTimeout(this.timeoutId)
    var that = this
    this.timeoutId = setTimeout(function () {
      that.performProcessing()
    }, 1000)
  },
}

window.onscroll = processor.process()
//
// function throttle(fn,delay){
//   let valid = true
//   return function() {
//     if(!valid){
//       //休息时间 暂不接客
//       return false
//     }
//     // 工作时间，执行函数并且在间隔期内把状态位设为无效
//     valid = false
//     setTimeout(() => {
//       fn()
//       valid = true;
//     }, delay)
//   }
// }



// 高级版？
