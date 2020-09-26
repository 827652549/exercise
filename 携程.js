let str = 'aabqzyw'

// let result1 = str.search(`/${}.*b/`)
// let result2 = str.search(/b.*w/)
// let result3 = str.search(/a.*b/)

let total = 0

for (let i = 0; i < 13; i++) {

  let reg = `${String.fromCharCode(i+97)}.*${String.fromCharCode(26-i-1+97)}`
  if (str.search(reg)
      !== -1
  ){
    total++
  }
}
console.log(total)

// console.log(result1)
// console.log(str.search(`/a.*888/`))
// console.log(result3)



let begin,end
let context = document.createElement('canvas').getContext('2d')
begin = new Date()
for (let i = 0; i < 10000000; i++) {
  context.lineWidth = 1
}
end = new Date()
console.log('1时间：',end-begin)

begin = new Date()
for (let i = 0; i < 10000000; i++) {
  context.lineWidth = {}
}
end = new Date()
console.log('{}时间：',end-begin)

begin = new Date()
for (let i = 0; i < 10000000; i++) {
  context.lineWidth = ''
}
end = new Date()
console.log('\"\"时间：',end-begin)

let bian

begin = new Date()
for (let i = 0; i < 10000000; i++) {
  bian = 1
}
end = new Date()
console.log('let时间：',end-begin)

begin = new Date()
for (let i = 0; i < 10000000; i++) {
  bian = {}
}
end = new Date()
console.log('let时间：',end-begin)

begin = new Date()
for (let i = 0; i < 10000000; i++) {
  bian = ''
}
end = new Date()
console.log('let时间：',end-begin)
