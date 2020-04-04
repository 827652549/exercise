function Person() {
    this.name = "Tom";
    this.getName = function () {
        return name;
    }
}
var p = new Person();
console.dir(p.name);
p.name = "Jun";
console.dir(p.name);

var p2 = new Person();
function f() {

}().call()
