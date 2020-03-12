function inheritPrototype(son, father){
    let prototype = Object.create(father.prototype); // 创建对象，创建父类原型的一个副本
    prototype.constructor = son;                    // 增强对象，弥补因重写原型而失去的默认的constructor 属性
    son.prototype = prototype;                      // 指定对象，将新创建的对象赋值给子类的原型
}

// 父类初始化实例属性和原型属性
function father(name){
    this.name = name;
    this.hobby = ["吃饭", "睡觉"];
}
father.prototype.sayName = function(){
    console.log(this.name);
};

// 借用构造函数传递增强子类实例属性（支持传参和避免篡改）
function son(name, age){
    father.call(this, name);
    this.age = age;
}

// 将父类原型指向子类
inheritPrototype(son, father);

// 新增子类原型属性
son.prototype.sayAge = function(){
    console.log(this.age);
};

let instance1 = new son("儿子1", 23);
let instance2 = new son("儿子2", 23);

instance1.hobby.push("打豆豆");

console.log(instance1.hobby);// ["吃饭", "睡觉"，"打豆豆"]
console.log(instance2.hobby);// ["吃饭", "睡觉"]
