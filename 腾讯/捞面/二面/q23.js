/**
 * 写出比较两颗二叉树是否相等(包括结构及节点值)的算法
 */
function fun (p1, p2) {
  return JSON.stringify(p1) === JSON.stringify(p2)
}

//html节点树能否用1）算法比较，是否存在优化方案？
//能
