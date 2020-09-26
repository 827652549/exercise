/**
 * 有个小偷来到了一个地方准备实施他的盗窃计划，整个城市类似一个二叉树一样，所有的节点有且仅有一个父亲节点，最多拥有2个孩子节点。每个房子藏有相应的金条，现在有个条件，小偷不允许偷直接相邻2个房子的金条。给定一个房子的布局，求小偷做多能偷取的金条数是多少。示例1:3/ \2      3\\3      1小偷能偷取的最大金条是:3 + 3 + 1 = 7.示例2:3/ \4      5/ \\1      3      1小偷能偷取的最大金条是:4 + 5 = 9
 */
function fun (root) {
  const map = new Map()
  const dfs = (root) => {
    if (!root) return 0
    if (map.has(root)) return map.get(root)
    let currVal = root.val
    if (root.right) {
      currVal += dfs(root.right.right) + dfs(root.right.left)
    }
    if (root.left) {
      currVal += dfs(root.left.right) + dfs(root.left.left)
    }
    let val2 = dfs(root.right) + dfs(root.left)
    let money = Math.max(currVal, val2)
    map.set(root, money)
    return money
  }
  return dfs(root)
}

// 用map来存每个节点对应的能盗取的最高金额
const map = new Map()
const dfs = (root) => {
  if (!root) return 0
  // 如果map中已经存有这个节点的最高金额就直接返回
  if (map.has(root)) return map.get(root);

  // val1 选择偷当前节点，所以无法偷当前节点的左右节点
  let val1 = root.val
  // 如果左右节点存在的话，val1 需要加上左右节点的左右节点对应的最高金额
  if (root.right) val1 += dfs(root.right.right) + dfs(root.right.left)
  if (root.left) val1 += dfs(root.left.right) + dfs(root.left.left)

  // val2 选择不偷当前节点，为当前节点的左右节点对应的最高金额相加
  let val2 = dfs(root.right) + dfs(root.left)
  // 当前节点的最高金额为 val1 和 val2 中较大的那一个。
  let money = Math.max(val1, val2)
  // 将最高金额存到map里
  map.set(root, money)
  return money
}
return dfs(root)
