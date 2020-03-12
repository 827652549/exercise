/**
 * resolve 解析🌲
 * reject 拒绝❌
 * @type {Promise<unknown>}
 */
let promise = new Promise(function (resolve, reject) {

    setTimeout(function () {
        console.log('成功！');
        resolve('1');
        reject('2');
    },100)

}).then(
    function (successMessage) {
        console.log("当成功时"+successMessage);
    },function (err) {
        console.log('当失败时'+err);
    }
);




Promise.resolve()

    .then(() => console.log('b'))

    .then(
        () => Promise.resolve('c')
            .then(
            (data) => {
                setTimeout(() => console.log('d'));
                console.log('f');
                return data;
            }
        )
    )
    .then(data => console.log(data));


setTimeout(() => console.log('a'));
//  b      fc            ad
