//创建一个数组对象，地址=[0X001]
var obj = [1];

//将obj2 = [0x001]
var obj2 = obj;

//给[0x001]代表的对象执行push()
obj.push(2);

//所以二者输出的是一样的值，因为同时引用的是同一个对象
console.log(obj);
console.log(obj2);


