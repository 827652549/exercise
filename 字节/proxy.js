let obj = {name:'Joe',age:100}

let obj1 = new Proxy(obj,{
  get:function(target,key,receiver){
    console.log(`get ${key}`)
    return Reflect.get(target,key,receiver)
  },
  set:function(target,key,value,receiver){
    console.log(`set ${key}`)
    return Reflect.set(target,key,value,receiver)
  }
})

// console.log(obj1.name)    // get name     "Joe"
obj1.name="Bob"           // set name
// console.log(obj1.name)    // get name     "Bob"
