fs = require('fs');
var dir = './recipeint';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
const size=100000;
let recipeint='';
let number = 919700000000;
let email = '';
var myArgs = process.argv.slice(2);
let postFileName = '';
if(myArgs>=1000 && myArgs<1000000){
    let mod =  (myArgs/1000).toFixed(0);
    postFileName = "recipientEmail-"+mod+"K.txt";
}else if(myArgs>=1000000){
    let mod =  (myArgs/1000000).toFixed(0);
    postFileName = "recipientEmail-"+mod+"M.txt";
}else{
    postFileName = "recipientEmail-"+myArgs+".txt";
}
console.log("File Name : "+postFileName);

for(i=0;i<myArgs;i++){
    number = number + 1;
    email = "testSample"+i+"@test.com";
    recipeint=""+number+"|"+email+"\n";
    fs.appendFileSync(dir+"/"+postFileName, recipeint, function (err) {
        if (err) return console.log(err);
        
      });
}
console.log('Email File for Job type 1 has been created successfully!!!');