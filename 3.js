const thread =require("threads")
const http = require("http");
const { resolve } = require("path/posix");
var x = 1;
var ot = 0;
const otp = () => {
    return new Promise(resolve => {
        
        var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '181fa04376@gmail.com',
    pass: 'Kalyan4376'
  }
});
function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min) + min
  )
}
var t = between(1000, 10000);
var x = "";
x = x + t;
//console.log(t);
var mailOptions = {
  from: '181fa04376@gmail.com',
  to: 'rasagnaankam1@gmail.com',
  subject: 'enter otp',
  text: x
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    resolve(t);
  }
});





    })
    
}




const p = async (data) => {
    
    x++;
     var body = data;
    var out = JSON.parse(body);
    return new Promise(async resolve => {
        var url = out['imageurl']
        let h = 0;
        for (let i = 0; i < tp; i++){
            if (udata['users'][i]['name'] ==out['name']) {
                h = 369;
                break;
            }
        }
        //console.log()
        if(h!=369){resolve("otp")}
        var g = x + " " + url;
        t = await main(g)
        if (t == 1) {
            //console.log("ki");
            resolve("success");
        }
        else { resolve("failure"); }
    });
}


var cl=()=>{
http.createServer( async function  (req, resp) {
   
    var t = "hi";
    if (req.method == 'POST') {
        
        console.log("new request arrised");
    let r=""
        req.on('data', async function (data, res) {
            res = resp;
            r += await p(data)

            if (r == 'otp') {
                res.writeHead(401, { 'Content-Type': 'text/plain' });
                res.statusMessage = 'Not found';
                res.end(JSON.stringify({  "success": false,
  "error": "you are not authenticated"
}));
            }
            else if (r == 'success') {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.statusMessage = 'success';
                //res.write("success");
                 res.end(JSON.stringify({  "success": true,
  "message": "successfully processed"
}));
            }
            else {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.statusMessage = 'Not found';
                res.end(JSON.stringify({  "success": false,
  "error": "error message string here"
}));
            }
             //res.end();
        }); 
       
    } 
    else {
        //console.log("hi")
        resp.writeHead(404, { 'Content-Type': 'text/plain' });
                resp.statusMessage = 'Not found';
                resp.end(JSON.stringify({  "success": false,
  "error": "error message string here"
}));
    }
   // resp.write(t);
    //res.end();
}).listen(8080);}
async function main(url){
    //console.log("request accepted")
    return new Promise(async resolve => {
        const image = await thread.spawn(new thread.Worker("2.js"))
        const hash = await image.hashed(url)
        if (hash == 1) {
            resolve(1);
        }
        else {
            resolve(0);
        }
    })
   //thread.Thread.terminate(image)
}

var xyz = async () => {
    console.log("dsb");
    //ot = await otp();
    console.log(ot);
    const fs = require('fs');
const fileContents = fs.readFileSync('./user.json', 'utf8');
udata = JSON.parse(fileContents)
var tp=udata['users'].length
    cl();
}
xyz();

const fs = require('fs');
const fileContents = fs.readFileSync('./user.json', 'utf8');
udata = JSON.parse(fileContents)
var tp=udata['users'].length