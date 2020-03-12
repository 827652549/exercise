function Object(obj) {
    function Son() {}
    Son.prototype = obj;
    return new Son();
}

function Father() {
    this.hobby = ['吃饭','睡觉'];
}

let father = new Father();
let son = Object(new Father());

console.log(father.hobby);
console.log(son.hobby);
