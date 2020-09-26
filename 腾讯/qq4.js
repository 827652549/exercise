// 本题为考试多行输入输出规范示例，无需提交，不计分。
// var n = parseInt(readline());
// let lines = []
// for(let i = 0;i < n; i++){
//   lines[i] = readline()
// }

let lines = ['43211234','101','2222222','2323132132133']
// function fun () {
//   let r = new RegExp(/1{2}|2{2}|3{2}|4{2}|5{2}|6{2}|7{2}|8{2}|9{2}/)
//   lines.forEach(e=>{
//     let i = 0
//     while (e.search(r)!==-1){
//       let index = e.search(r)
//       i++
//       let strArr = e.split('')
//       strArr.splice(index,2)
//       e = strArr.join('')
//     }
//     console.log(i)
//   })
// }
function fun () {
  let r = new RegExp(/0{2}|1{2}|2{2}|3{2}|4{2}|5{2}|6{2}|7{2}|8{2}|9{2}/)
  lines.forEach(e=>{
    let i = 0
    while (e.search(r)!==-1){
      i++
      e = e.replace(r,'')
    }
    console.log(i)
  })
}

fun()
