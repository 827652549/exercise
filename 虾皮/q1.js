// let a = readline();
// let b = readline();

let a = 2;
let n = 0;

function pow (a,n) {
  let o = 1
  if (n>0){
    for (let i = 0; i < n; i++) {
      o*=a
    }
  }

  return o
}

console.log(pow(a,n))
