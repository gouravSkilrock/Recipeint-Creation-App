fs = require('fs');
var dir = './recipeint';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
const size=10;
let recipeint='';
let number = 919700000000;
var myArgs = process.argv.slice(2);
console.log(" Recipient : "+myArgs[0]);

let postFileName = '';
if(myArgs[0]>=1000 && myArgs[0]<1000000){
    let mod =  (myArgs[0]/1000).toFixed(0);
    postFileName = "recipientMSISDN-JT3-"+mod+"K.txt";
}else if(myArgs[0]>=1000000){
    let mod =  (myArgs[0]/1000000).toFixed(0);
    postFileName = "recipientMSISDN-JT3-"+mod+"M.txt";
}else{
    postFileName = "recipientMSISDN-JT3-"+myArgs[0]+".txt";
}

console.log("File Name : "+postFileName);
for(i=0;i<myArgs[0];i++){
    number = number + 1; 
    recipeint=""+number+",text, This is to inform recipient "+number+"\n";
    fs.appendFile(dir+"/"+postFileName, recipeint, function (err) {
        if (err) return console.log("Failed!!! : "+err);
        
      });
}
console.log('MSISDN File for Job type 3 has been created successfully!!!');
