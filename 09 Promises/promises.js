function takeShower() {
    // return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log('You take shower');
            // resolve('You took shower');
        },2000);
    // });
}

function doHomework() {
    // return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log('You do your homework');
            // resolve('You completed your homework');
        },1000);
    // });
}

function play() {
    // return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log('You play what you like');
            // resolve('You played what you like');
        },3000);
    // });
}

takeShower();
doHomework();
play();