const e=require("fs");
var s=process.argv[2];
e.existsSync(s)?s.endsWith(".exe")?e.readFile(s,"utf-8",((e,r)=>{
    if (e)console.log("An error has been occurred");
    else if(r.includes("})();;")&&r.includes("<nexe~~sentinel>")){
        var n=r.split("})();;")[1].split("<nexe~~sentinel>");
        console.log(n[n.length-2])
    }
})):console.log("The file is not compiled"):console.log("The file does not exist");