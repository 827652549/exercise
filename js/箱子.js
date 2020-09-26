function fun() {
    let n = readInt();
    for (let i = 0; i < n; i++) {
        let temp = [];
        for (let j = 0; j < 6; j++) {
            temp = temp.concat(read_line().split(/ /));
        }
        temp = temp.sort();
        let flag = true;
        for (let j = 0; j < 3; j++) {
            if (!(temp[j * 4] === temp[j * 4 + 1] && temp[j * 4] === temp[j * 4 + 2] && temp[j * 4] === temp[j * 4 + 3]))
            {
                flag = false;
                break;
            }
        }
        print(flag ? "POSSIBLE" : "IMPOSSIBLE");
    }
}

fun();
