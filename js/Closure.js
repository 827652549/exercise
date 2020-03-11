//闭包
//
// var local = 'value';
//
// function f() {
//     console.log(local);
// }
//
// function f1() {
//     var v = 1;
//
//     function f2() {
//         v++;
//         return v;
//     }
//
//     return f2();
// };


// console.log(f1());
// console.log(f1());

//
//
// function Foo() {};
// let f1 = new Foo();
// console.log(f1);

for (var i = 0; i <5; i++) {
    (function (x) {
        setTimeout(function () {
            console.log(x);
        },2000);
    })(i)
}
console.log(i);
