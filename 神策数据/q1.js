function jsonp (url) {
 let scriptCurr = `
    <script src="${url}"></script>
  `
  document.getElementsByTagName('head')[0].innerHTML+=scriptCurr

}

const debounce = (fn ,delay)=>{
  let timer = null
  return (...args)=>{
    clearTimeout(timer)
    timer = setTimeout(()=>{
      fn.apply(this,args)
    },delay)
  }
}
