function openFile(callback) {
    setTimeout(()=>{
        console.log('File opened.');
        callback();
    },3000);
    
}
function addSomething() {
    console.log('Something added to the file.');
}
function removeSomething() {
    console.log('Something removed from the file.');
}

openFile(removeSomething);

openFile(addSomething);