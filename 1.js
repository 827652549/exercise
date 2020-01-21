// var n = parseInt(readline());
// for(var i = 0;i < n; i++){
//     lines = readline().split(" ")
// }
var n = 5;
lines = [1,2,3,4,5];
var nums = 0;
for(var i = 0;i<n;i++){
    for(var j = 0;j<n;j++){
        for(var k = 0;k<n;k++){
            if(i!=j&&k!=i&&k!=j){
                var a = lines[i]+lines[j]-lines[k];
                var b = lines[k]+lines[j]-lines[i];
                var c = lines[i]+lines[k]-lines[j];
                if (a>=0&&b>=0&&c>=0){
                    nums++;
                }
            }
        }
    }
}

console(nums/6);