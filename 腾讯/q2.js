//实现一个函数 countLongest(tree) ，输入一棵二叉树，返回二叉树中距离最⻓的两个叶子节点之间 的距离。

let max = Number.MIN_VALUE;

let count = 0;

function _countLongest(tree) {

    if (tree.left != undefined) {
        count++;
        _countLongest(tree.left);
    }
    if (tree.right != undefined) {
        count++;
        _countLongest(tree.right);
    }

    if (tree.left != undefined&&tree.right != undefined){
        max = Math.max(max, count);
        count--;
    }
}

function countLongest(tree) {
    _countLongest(tree);
    console.log(max);
    //这里需要重置max和count
    max = 0;count = 0;
}


var tree1 = {
    value: 1,
    left: {
        value: 2
    }, right: {
        value: 3
    }
};
countLongest(tree1); // 2

var tree2 = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 3,
            left: {
                value: 6
            }
        },
        right: {
            value: 4
        }
    },
    right: {
        value: 5
    }
};
countLongest(tree2); // 4

