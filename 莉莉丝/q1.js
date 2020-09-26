const template = '这是对象第一个属性{{ a }}，这是对象第二个属性{{ b.c }}，这是个数组{{ b.d[0] }}';
const data = {a:1,b:{c:2,d:[3,4],},};

function engine (template,data) {
  let newStr = template
  let result = newStr.match(/(\{\{(.+?)\}\})/g)

  let one = result[0].substring(2,result[0].length-2).trim()

  newStr = newStr.replace(/(\{\{(.+?)\}\})/,data[one]);

  let two = result[1].substring(2,result[1].length-2).trim()
  let twoArr = two.split('.')

  newStr = newStr.replace(/(\{\{(.+?)\}\})/,data[twoArr[0]][twoArr[1]]);


  let three = result[2].substring(2,result[2].length-2).trim()
  let threeArr = two.split('.')

  newStr = newStr.replace(/(\{\{(.+?)\}\})/,data[threeArr[0]][threeArr[1].match(/\d/)]);

  console.log(two)
  console.log(newStr)

  console.log()

  // for (let i = 0; i < result.length; i++) {
  //   let re = result[i].substring(2,result[i].length-2).trim()
  //   console.log(re)
  // }
}

engine(template,data)


function handleFetchQueue(urls, max, callback) {
  const urlCount = urls.length;
  const requestsQueue = [];
  const results = [];
  let i = 0;
  const handleRequest = (url) => {
    const req = fetch(url).then(res => {
      const len = results.push(res);
      if (len < urlCount && i + 1 < urlCount) {
        requestsQueue.shift();
        handleRequest(urls[++i])
      } else if (len === urlCount) {
        'function' === typeof callback && callback(results)
      }
    }).catch(e => {
      results.push(e)
    });
    if (requestsQueue.push(req) < max) {
      handleRequest(urls[++i])
    }
  };
  handleRequest(urls[i])
}

Object.hasOwnProperty()
