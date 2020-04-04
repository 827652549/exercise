/**
 * 统计文字字数
 * @param str
 */
function countWords(str) {
    let counter = {}
    // console.log(str.match(/[^\s,\#,\*,\-,\|,\~,\[,\],\(,\),\>,\<,\!,\?]/g));
    // console.log(str.match(/(?x)(?:[\w-]+|[\x80-\xff]{3})/g));
    //匹配中文字
    //匹配单词
//匹配标点符号
    console.log(str.match(/([\u4e00-\u9fa5]+?|[a-zA-Z0-9]+)/g));

}

countWords("您好师姐" +
    "\n" +
    "你奶奶");

