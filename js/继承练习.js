// function Father(name,age){
//     this.name = name;
//     this.age = age;
// }
//
// Father.getName = function(){
//     return this.name;
// };
//
// function Son() {
//     Father.call(this);
// }
//
// let son = new Son('12');
// console.log(son);


/**
 作者：Akara
 链接：https://www.nowcoder.com/discuss/382180?type=all&order=time&pos=&page=1
 来源：牛客网

 2. 创建一个 Person 类，其包含公有属性 name 和私有属性 age 以及公有方法 setAge ；创建一个 Teacher 类，使其继承 Person ，并包含私有属性 studentCount 和私有方法 setStudentCount 。
 */

const [Person, Teacher] = (function () {
    const _age = Symbol('_age');

    const _studentCount = Symbol('_studentCount');
    const _setStudentCount = Symbol('_setStudentCount');


    class Person {
        constructor(name, age) {
            this.name = name;
            this[_age] = age;
        }

        setAge(age) {
            this[_age] = age;
        }
    }

    class Teacher extends Person{
        constructor(name,age,studentCount){
            super(name,age);
            this[_studentCount] = studentCount;
        }

        /**
         * 私有方法，设置学生数量
         * @param studentCount
         */
        [_setStudentCount](studentCount){
            this[_studentCount] = studentCount;
        }

        setCount(count){
            this[_setStudentCount](count);
        }

    }

    return [Person, Teacher];
})();

const p = new Person('初始名字',0);
const t = new Teacher('老师',24,55);


