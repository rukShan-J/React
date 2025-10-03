function func1(callback) {
    setTimeout(() =>{
        console.log('This is func1');
        callback();
    },1000);
}

function func2(callback) {
    setTimeout(() =>{
        console.log('This is func1');
        callback();
    },1000);
}

function func3(callback) {
    setTimeout(() =>{
        console.log('This is func1');
        callback();
    },1000);
}

function func4(callback) {
    setTimeout(() =>{
        console.log('This is func1');
        callback();
    },1000);
}

function func5(callback) {
    setTimeout(() =>{
        console.log('This is func1');
        callback();
    },1000);
}

func1(() => {
    console.log('this is func1 again');
    func2(() => {
        func3(() => {
            func4(() => {
                func5(() => {
                    console.log('All done');
                });
            });
        });
    });
});
