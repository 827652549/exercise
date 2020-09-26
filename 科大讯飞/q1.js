
let str = `3,3
2 3 1
1 5 1
4 2 1`

// var n = parseInt(readline());
let firstArr = '3,3'.split(',');
let m = firstArr[0];
let n = firstArr[1];
let doubleArr = [];
doubleArr.push('2 3 1'.split(' '));
doubleArr.push('1 5 1'.split(' '));
doubleArr.push('4 2 1'.split(' '));

doubleArr = doubleArr.map(e=>{
  return e.map(e=>{
    return parseInt(e);
  })
})

let currM = 0;
let currN = 0;
let total = 0;
if (doubleArr.length!==0){
  total = doubleArr[0][0]
}
while (!(currM===(m-1) && currN===(n-1))){
  let right,bottom;
  if (currM+1>=m){
    total+=doubleArr[currM][currN+1]
    currN+=1;
  }else if(currN+1>=n){
    total+=doubleArr[currM+1][currN]
    currM+=1;
  }else{
    right = doubleArr[currM+1][currN];
    bottom = doubleArr[currM][currN+1];
    if (right>bottom){
      total+=right;
      currM+=1;
    }else{
      total+=bottom;
      currN+=1;
    }
  }
}
console.log(total);
