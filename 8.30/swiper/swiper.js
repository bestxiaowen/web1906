
var a = 0
var b = 0;

for (let i = 0; i < 100; i++) {
    if (i % 2 === 1) {
        a = a + i
    } else {
        b = b + i
    }
}

console.log(a)
console.log(b)

var child = 3
for (i = 0; i < 5; i++) {
    child = child + 2
}
console.log('第一题：',child)

// var rebit

var all = 0;
for(var i=0;i<=20;i++){
    for(var j=0;j<=10;j++){
        // if(1*i+2*j===20){
        //     all++
        // }
        // if(1*i+5*j===20){
        //     all++
        // }
        // if(2*i+5*j===20){
        //     all++
        // }
        for(var k=0;k<=4;k++){
            if(1*i+2*j+5*k===20){
                all++
                console.log(i,j,k)
            }
        }
    }
}

console.log('第三题:',all)