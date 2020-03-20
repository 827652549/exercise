// for (var i = 0; i < 5; i++) {
//     setTimeout(function (i) {
//         console.log(i);
//     }.bind(this,i),1000)
// }
//
// for (var i = 0; i < 5; i++) {
//     setTimeout(function (i) {
//         return function () {
//             console.log(i);
//         }
//     }.call(this,i),1000)
// }
//
// for (var i = 0; i < 5; i++) {
//     setTimeout(function (i) {
//         return function () {
//             console.log(i);
//         }
//     }.apply(this,[i]),1000)
// }
for (var i = 0; i < 5; i++) {
    setTimeout(function (i) {
        console.log(i);
    }, 1000,i)
}
