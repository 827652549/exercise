//父亲的构造函数
function Father() {
    this.hobby = ['吃饭','睡觉'];
}

//给父添加方法
Father.prototype.work = function () {
    console.log('刷碗');
};

//儿子的构造函数
function Son() {
    this.hobby = ['读书','写字'];
    Father.call(this);
}

Son.prototype = new Father();
Son.prototype.constructor = Son;

let father = new Father();
let son = new Son();
console.log(father.hobby);
console.log(son.hobby);
father.work();//刷碗
son.work();//刷碗
