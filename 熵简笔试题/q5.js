function RemoveEmptyFields (inputJSON) {
  let keys = Object.keys(inputJSON)
  let values = Object.values(inputJSON)

  if (typeof inputJSON === 'object' && !Array.isArray(inputJSON) &&
    inputJSON !== null) {
    // console.log('**',inputJSON)
    if (Object.keys(inputJSON).length === 0) {
      return ''
    }
  }

  for (let i = 0; i < keys.length; i++) {
    // inputJSON[keys[i]]
    let currValue = values[i]
    if (Array.isArray(currValue)) {
      //数组为空
      if (currValue.length === 0) {
        delete inputJSON[keys[i]]
      } else {
        // console.log('>',currValue)
        currValue = currValue.map(e => {
          if (Object.keys(e).length !== 0) {
            return RemoveEmptyFields(e)
          }
          // if (typeof e === 'object' && !Array.isArray(e) && e !== null){
          //   if (e.length === 0){
          //     // delete inputJSON[keys[i]]
          //   }else {
          //     return RemoveEmptyFields(e)
          //   }
          // }

        })
        // console.log('>>',currValue)
      }
    }
    if (currValue === null) {
      delete inputJSON[keys[i]]
    }
    if (typeof currValue === 'string' && currValue.trim().length === 0) {
      delete inputJSON[keys[i]]
    }

    if (typeof currValue === 'object' && !Array.isArray(currValue) &&
      currValue !== null) {
      if (currValue.length === 0) {
        delete inputJSON[keys[i]]
      }
    }
  }

  return inputJSON
}

let obj = {
  'name': [],
  'name2': [1, 2, 3],
  'name3': null,
  'name4': [{ 'a': 1 }, { 'n': '' }, { 'm': '  ' }],
  'name5': '1212121',
  'name6': function () {
    console.log(123)
  }, zero: 0,

  'name7': undefined,
}
// console.log(RemoveEmptyFields(obj))
// console.log(RemoveEmptyFields(RemoveEmptyFields(obj)))

function deepClone (obj) {
  let objClone = Array.isArray(obj) ? [] : {}
  if (_objClone(objClone)) {
    for (key in obj) {
      objClone[key] = _objClone(obj[key])
        ? deepClone(obj[key])
        : objClone[key] = obj[key]
    }
  }
  return objClone
}

function _objClone (obj) {
  return obj && typeof obj === 'object'
}

console.log(deepClone(obj))

let obj1 = [1, 2, 3, 4]
let obj2 = {
  a: 1, b: 2, zero: 0,
  c: undefined,
  d: {},
  e: [{ a: [1, 2, 3] }],
}

let bianli = o => {
  for (key in o) {
    console.log(key, o[key])
  }
}
bianli(obj1)
bianli(obj2)
