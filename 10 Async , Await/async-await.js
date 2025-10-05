function takeShower() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            const shower = true;
            if(shower) {
                console.log('You take shower');
                resolve('You took shower');
            } else {
                reject('You didn\'t take shower');
            }
            },2000);
    });
}

function doHomework() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            const homework = true;
            if(homework) {
                console.log('You do your homework');
                resolve('You completed your homework');
            } else {
                reject('You didn\'t do your homework');
            }                
        },1000);
    });
}

function play() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            const play = true;
            if(play) {
                console.log('You play what you like');
                resolve('You played what you like');
            } else {
                reject('You didn\'t play');
            }
        },3000);
    });
}

// First, need to create an async function. Then, can use the await keyword inside the async function to call functions like a normal function call.
async function doAll() {
    try {
        await takeShower();
        await doHomework();
        await play(); 
    } catch(error) {
        console.log(error);
    }   
}
doAll();

// // call promises in sequence
// takeShower()
// .then((result) => {     // The code inside resolve is the output here.
//     console.log(result);
//     return doHomework();
// })
// .then((result) => {
//     console.log(result);
//     return play();
// })
// .then((result) => {
//     console.log(result);
//     console.log("All done.");
// })

// // If any function returned an error, this will print the error
// // (inside the reject string)
// .catch((error) => {
//     console.error(error);
// });


// // takeShower();
// // doHomework();
// // play();