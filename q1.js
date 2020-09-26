const arr = [
  { id: 1, name: "child1", parentId: 0 },
  { id: 3, name: "child3", parentId: 1 },
  { id: 88, name: "child3", parentId: 3 },
  { id: 2, name: "child2", parentId: 1 },
  { id: 0, name: "parent0"  },
  { id: 4, name: "child4", parentId: 3 },
  { id: 8, name: "child8", parentId: 0 },
  { id: 10, name: "parent10" },
  { id: 5, name: "child5", parentId: 2 },
  { id: 6, name: "child6", parentId: 1 },
  { id: 11, name: "child11", parentId: 10 },
  { id: 12, name: "child12", parentId: 10 },
  { id: 13, name: "child13", parentId: 8 },
  { id: 14, name: "child14", parentId: 0 },
];
[
  {
    id: 0,
    name: "parent0",
    children: [{ id: 1, name: "child1", parentId: 0 }],
  },
  {
    id: 10,
    name: "parent10",
    children: [{ id: 11, name: "child11", parentId: 10 }],
  },
];

let result  = []
let nextArr = []
arr.forEach(e=>{
  if(!e.hasOwnProperty('parentId')){
    result.push(e);
  }else {
    nextArr.push(e)
  }
})
nextArr.sort((a,b)=>{
  if (a.parentId>b.parentId){
    return 1;
  }else{
    return -1;
  }
})


let currParentId = -1
nextArr.forEach(e=>{
  let A = e;
  if (e.parentId!==currParentId){
    currParentId = e.parentId;
  }
  result.forEach(e=>{
      if (e.id===currParentId){
        if (!e.children){
          e.assign({children:[]})
        }
        e.children.push(A);
      }
    })

})


console.log(nextArr)

let obj = { id: 10, name: "parent10" }


// // 、实现超出整数存储范围的两个大正整数相加 function add(a, b)，注：参数a和b以及函数的返回值都是字符串
//
// //eg: '239412345'
// //      '3325544'
// function add (a,b) {
//   let strA = a.split('')
//   let strB = b.split('')
//
//   let strAReverse = strA.reverse();
//   let strBReverse = strB.reverse();
//
//   let result = ''
//
//   let minLen = strAReverse.length < strBReverse.length ? strAReverse.length : strBReverse.length
//   let maxStr = strAReverse.length > strBReverse.length ? strAReverse : strBReverse
//   let isAdd = false
//   for (let i = 0; i < minLen; i++) {
//     let add = 0;
//     if(isAdd){
//       add = 1;
//     }
//     let currNum = parseInt(strAReverse[i])+parseInt(strBReverse[i])+add
//     if(currNum >= 10){
//       isAdd = true
//       currNum-=10
//     }
//     result+=currNum
//
//   }
//
//   for (let i = 0; i <maxStr.length-minLen; i++) {
//     result+=parseInt(maxStr[i+minLen])+(isAdd?1:0)
//     if(isAdd){
//       isAdd=false
//     }
//   }
//
//   return result.split('').reverse().join('')
// }
//
// console.log(add('88','1003'))
