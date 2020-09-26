/**
  * function ListNode (x) {
  * this.val = x
  * this.next = null
  *  }
  */

function find (pHead1,pHead2) {
  let len1 = computeLen(pHead1)
  let len2 = computeLen(pHead2)
  if(len1 > len2){
    pHead1 = _find(pHead1 , len1 - len2)
  }else {
    pHead2 = _find(pHead2 , len2 - len1)
  }
  while (pHead1){
    if (pHead1 === pHead2){
      return pHead1
    }
    pHead1 = pHead1.next
    pHead2 = pHead2.next
  }

  //计算总长度
  function computeLen(p){
    if (p===null){
      return 0
    }
    let sum = 0
    while(p){
      sum++
      p=p.next
    }
    return sum
  }

  function _find (pHead,step) {
    while (step--){
      pHead = pHead.next
    }
    return pHead
  }
}
