const fs = require('fs');

var readMe = fs.readFile('readMe.txt','utf8',function(err,data){
    console.log(data);
});

fs.writeFile('writetxt.txt','this is the text', (err)=>{
    if (err){
        console.log('not written success');
    }
});

// reading and writing files synchronously