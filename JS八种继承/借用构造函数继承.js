//父亲的构造函数
function Father() {
    this.hobby = ['吃饭','睡觉'];
}
//儿子的构造函数
function Son() {
    Father.call(this);
}

console.log(new Father().hobby);
console.log(new Son().hobby);
