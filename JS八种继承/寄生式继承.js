function createAnother(original){
    var clone = Object(original); // 通过调用 object() 函数创建一个新对象
    clone.sayHi = function(){  // 以某种方式来增强对象
        console.log("hi");
    };
    return clone; // 返回这个对象
}


function Object(obj) {
    function Son() {}
    Son.prototype = obj;
    return new Son();
}

function Father() {
    this.hobby = ['吃饭','睡觉'];
}

let father = new Father();
let son = createAnother(new Father());

console.log(father.hobby);
console.log(son.hobby);
son.sayHi();
