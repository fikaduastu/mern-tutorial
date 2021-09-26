const fs = require('fs');

var readMe = fs.readFileSync('readMe.txt','utf8');
console.log(readMe);

fs.writeFileSync('writeMe.txt',readMe);
var readMe1 = fs.readFileSync('writeMe.txt','utf8');
console.log(readMe1);

// read and write from the text file synchronously