function l(x) {
    let {sin,PI} = Math;
    let y = 0.5*((sin(PI*x-PI/2.0)+1));
    return y;
}

//5s
let t = 1;

//单位长度100
let l = 999;

let count = 0;
let interval = setInterval(function () {
    if (count>=100){
        clearInterval(interval);
    }
    console.log(v(count/100)*l)

    count++;
},t*1000/100)



