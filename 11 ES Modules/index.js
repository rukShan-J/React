// because of the 'require' keyword, the output can be seen in the output area of ​​the code executor.
// const extra = require('./extra.js'); 

// console.log(extra.text);

import {text,hello} from './extra.js';
import {readFile} from 'fs/promises';

console.log(text);

console.log('test log from index.js');


async function txtFile() {
    var data = await readfile('./sample.txt','utf8');
    console.log(data);
}

txtFile();