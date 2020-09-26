// let line1=readline()
// let line2=readline()

let line1 = '6'
let line2 = '1 2 3 4 5 6'

function fun(){
  let num = parseInt(line1)
  let arr = line2.split(' ').map(e=>parseInt(e))
  let arrCopy = JSON.parse(JSON.stringify(arr))
  arr = arr.sort((a,b)=>{
    if (a>b){
      return 1
    }else if (a<b){
      return -1
    }else {
      return 0
    }
  })

  arrCopy.forEach(e=>{
    if (e <= arr[arr.length/2-1]){
      console.log(arr[arr.length/2])
    }else if (e>=arr[arr.length/2]){
      console.log(arr[arr.length/2-1])
    }else if (e>=arr[arr.length/2-1] && e<=arr[arr.length/2]){
      console.log(arr[arr.length/2-1])
    }
  })
}

fun()
