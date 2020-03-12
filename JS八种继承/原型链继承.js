//父亲的构造函数
function Father() {
}

//给父添加方法
Father.prototype.work = function () {
    console.log('刷碗');
};

//儿子的构造函数
function Son() {
}

//将父亲的实例覆盖儿子的原型对象，这样儿子的实例就继承了父亲,因为new实例的过程就是通过prototype的构造函数来创建的对象
Son.prototype = new Father();

new Father().work();//刷碗
new Son().work();//刷碗
