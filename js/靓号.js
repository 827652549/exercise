// while(line=readline()){
//     var lines = line.split(",");
//     // var a = parseInt(lines[0]);
//     // var b = parseInt(lines[1]);
//     // print(a+b);
// }
//

var lines = ["15112347234","15176313245","15176313346","15176313325","15166667234","15188847234"];

//是否是顺子
function isShun(phone) {
    //后8位
    let str = phone.substring(3,11);
    return {isShun:true,len:3}
}
//
//是否是豹子
function isBao(phone) {
    let str = phone.substring(3,11);
    console.log(str.match('[0-9]*[0-9]{3,}[0-9]*'));
    return {isBao:true,len:3}
}
lines.forEach(function (value) {
    isBao(value);
})


// lines.sort(function (a, b) {
//
//     //a是顺子或豹子，b什么都不是
//     if ((isShun(a).isShun || isShun(a).isBao)&&(!isShun(b).isShun && !isShun(b).isBao)){
//         return 1;
//     }
//
//     return a-b;
// });

// let arr = [1,7,3,2,4];
// console.log(arr.sort(function (a,b) {
//     if (a%2==0){return false};
//     return true;
// }))
