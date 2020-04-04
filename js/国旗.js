/**
 * 获取队中从前到后每个人与前方身高高于自己的人的最短距离
 * @param height int整型一维数组 队中从前到后每个人与前方身高高于自己的人的最短距离
 * @return int整型一维数组
 */
function DistanceToHigher(height) {

    let result = [];
    let arr = height.reverse();
    for (let i = 0; i < arr.length; i++) {
        let isZero = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                result.push(j - i);
                isZero = false;
                break;
            }
        }
        if (isZero) {
            result.push(0);
        }
    }
    return result.reverse();
}

module.exports = {
    DistanceToHigher: DistanceToHigher
};
