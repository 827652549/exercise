//微
//宏

async function main () {
  console.log('A')
  await sleep()
  console.log('B')
}

async function sleep(){
  return new Promise(resolve => {
    ///////
    setTimeout(function (){
      console.log('resolve')
      resolve()
    },2000)

  })
}

// console.log(1)
main()
// console.log(2)
// async function f () {
//   return 1
// }
//
// let jt =async  ()=>{
//   return 2
// }
//
//
// f().then(value=>{
//   console.log(value)
// })
//console.log(jt())

async function findPosts() {
  var response = await $.get('/posts');
  try{
    return JSON.parse(response.posts)
  } catch(e) {
    throw new Error("failed")
  }
}

function findPosts() {
  var ctx = this, args = arguments;
  return Promise.resolve().then(function () {
    var response;
    return $.get('/posts').then(function (value) {
      response = value;
      return Promise.resolve().then(function () {
        return JSON.parse(response.posts);
      }).catch(function (e) {
        throw new Error('failed');
      }).then(function () {
      });
    });
  });
}


