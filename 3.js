const thread =require("threads")
const http = require("http");
const { resolve } = require("path/posix");
var x = 1;
const p = async (data) => {
    
    x++;
     var body = data;
    var out = JSON.parse(body);
    return new Promise(async resolve => {
        var url = out['imageurl']
        var g = x + " " + url;
        t = await main(g)
        if (t == 1) {
            //console.log("ki");
            resolve("success");
        }
        else { resolve("failure"); }
    });
}
http.createServer(function (req, resp) {

    //console.log(x++);
    //res.write("hi");
    var t = "hi";
    if (req.method == 'POST') {
        
        console.log("new request arrised");
    let r=""
        req.on('data', async function (data, res) {
            res = resp;
             r += await p(data)
            if (r == 'success') {
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
}).listen(8080);
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