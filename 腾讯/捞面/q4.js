/**
 * 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。

 设计一个算法来计算你所能获取的最大利润。你最多可以完成两笔交易。

 注意:你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

 */
function fun (prices) {
  //left

  // let curMinLeft = prices[0]
  // let sumLeft = 0
  // for (let i=0;i<prices.length;i++) {
  //   if (prices[i] < curMinLeft) {
  //     curMinLeft = prices[i]
  //     continue;
  //   }
  //   sumLeft = Math.max(prices[i] - curMinLeft, sumLeft)
  // }

  //right
  prices = prices.reverse()
  let curMinRight = prices[0]
  let sumRight = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < curMinRight) {
      curMinRight = prices[i]
      continue
    }
    console.log(prices[i], curMinRight)
    sumRight = Math.max(curMinRight - prices[i], sumRight)
  }

  return sumRight

}

console.log(fun([3, 3, 5, 0, 0, 3, 1, 4]))
