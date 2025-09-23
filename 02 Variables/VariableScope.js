var _var = 10;
let _let = 20;
const _const = 30;

// console.log(_var, _let, _const);

function scopeTest() {
    var _var2 = 100;
    let _let2 = 200;
    const _const2 = 300;

    if(true) {
        var _var3 = 'one';
        let _let3 = 'two';
        const _const3 = 'three';

        console.log(_var3, _let3, _const3);
    }
    console.log(_var2, _let2, _const2);
    console.log(_var3);     //This is working
    // console.log(_let3);     //This is not working BLOCK SCOPE
    // console.log(_const3);   //This is not working BLOCK SCOPE
}

// function call
scopeTest();

console.log(_var2);     //This is not working FUNCTION SCOPE