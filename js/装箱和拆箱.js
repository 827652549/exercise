String.prototype.toString = (str)=>{
    console.log('调用了String.prototype的toString');
    return String.toString(str);
};
console.log(typeof new String('abc'));//object
console.log(typeof 'abc');//string

new String('abc').toString();//调用了String.prototype的toString
'abc'.toString();//调用了String.prototype的toString

String.prototype.valueOf = ()=>{
    console.log('调用了String.prototype的valueOf');
    return String.valueOf();
};

console.log('abc');//abc


// String.toString = ()=>{
//     console.log('调用了String的toString');
// };
// String.constructor=()=>{
//     console.log('调用了String的constructor');
// };
// String.prototype.constructor=()=>{
//     console.log('调用了String.prototype的constructor');
// };
// String.prototype.valueOf = ()=>{
//     console.log('调用了String.prototype的valueOf');
// };
// String.valueOf = ()=>{
//     console.log('调用了String的valueOf');
// };

// String.prototype.MyFun=()=>{
//   console.log("调用MySub");
// };
//
// let s = "abc";
// s.toString(s);
// console.log(s.MyFun(s));

// let objString  =  new String('newValue');
// console.log(objString);


// var objNum = new Number(64);
// var objStr = new String('64');
// console.log(typeof objNum); // object
// console.log(typeof objStr); // object
//
// console.log(typeof objNum.valueOf()); // number 基本的数字类型
// console.log(typeof objNum.toString()); // string 基本的字符类型
// console.log(typeof objStr.valueOf()); // string 基本的数据类型
// console.log(typeof objStr.toString()); // string 基本的数据类型
