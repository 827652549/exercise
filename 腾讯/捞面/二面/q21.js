/**
 * 给定2个单向链表，每个节点包含一个0-9的数字，要求返回他们对应节点相加后产生的链表，例如：Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)Output: 7 -> 0 -> 8
 */
function ListNode (x) {
  this.val = x
  this.next = null
}

function fun (pNode1, pNode2) {
  //头部临时结点
  let n = new ListNode(0)
  let root = n
  //进位
  let carry = 0
  while (pNode1 || pNode2 || carry) {
    let x1 = 0, x2 = 0
    if (pNode1) {
      x1 = pNode1.val
      pNode1 = pNode1.next
    }
    if (pNode2) {
      x2 = pNode2.val
      pNode2 = pNode2.next
    }
    let currIndex = x1 + x2 + carry
    carry = parseInt(currIndex / 10)
    n.next = new ListNode(currIndex % 10)
    n = n.next
  }
  return root.next
}
