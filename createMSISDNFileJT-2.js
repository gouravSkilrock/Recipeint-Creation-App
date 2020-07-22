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
console.log("Number of placeholder :"+myArgs[1]);

let nPlaceholder = myArgs[1];

let postFileName = '';
if(myArgs[0]>=1000 && myArgs[0]<1000000){
    let mod =  (myArgs[0]/1000).toFixed(0);
    postFileName = "recipientMSISDN-JT2-PH-"+nPlaceholder+"-"+mod+"K.txt";
}else if(myArgs[0]>=1000000){
    let mod =  (myArgs[0]/1000000).toFixed(0);
    postFileName = "recipientMSISDN-JT2-PH-"+nPlaceholder+"-"+mod+"M.txt";
}else{
    postFileName = "recipientMSISDN-JT2-PH-"+nPlaceholder+"-"+myArgs[0]+".txt";
}


console.log("File Name : "+postFileName);
let placeholderStr='';
for(i=0;i<myArgs[0];i++){
    number = number + 1;
    //email = "testSample"+i+"@test.com";
    //recipeint=""+number+"|"+email+"\n";
   
    placeholderStr = '';
    for(j=1;j<=nPlaceholder;j++){
        if(placeholderStr==''){
            placeholderStr = "Place_h_"+j+"_"+i;
        } else{
            placeholderStr = placeholderStr+","+"Place_h_"+j+"_"+i;
        }
    }
    recipeint=""+number+","+placeholderStr+"\n";
    fs.appendFile(dir+"/"+postFileName, recipeint, function (err) {
        if (err) return console.log("Failed!!! : "+err);
        
      });
}
console.log('MSISDN File for Job type 2 has been created successfully!!!');
