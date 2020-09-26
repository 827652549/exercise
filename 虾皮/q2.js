// let a = readline();
// let n = readline();
let a = [];
let n = [];

function handleParam (input) {
  if (input==='undefined'){
    return undefined
  }
  return JSON.parse(JSON.stringify(input))
}

function sortBy (list, cols) {
  for (let i = cols.length-1; i >= 0; i--) {
    let curr  = cols[i]
    list.sort((a,b)=>{
      a = a[curr]
      b = b[curr]
      if (a<b){
        return -1
      }else if (a>b){
        return 1
      }else {
        // let colsNew = JSON.parse(JSON.stringify(cols))
        // colsNew.shift()
        // sortBy(list,colsNew)
        return 0
      }
    })
  }
  let arr = []
  // list.for(e=>{
  //   e.
  // })
  return list

}

let list = handleParam(a)
let cols = handleParam(n)

console.log(JSON.stringify(sortBy(list,cols)))
