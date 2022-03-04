const download = require('node-image-downloader')
const ex=require("threads/worker")
const { mainModule } = require('process');
const sharp = require("sharp");

 function resizeImage(x) {
    return new Promise(resolve => {
        try {
            sharp(x)
                .resize({
                    width: 130,
                    height: 90
                })
                .toFile(1+x);
     
           resolve(1);
        } catch (error) {
            resolve(0);
        }
    })
}

const y = (a, sre) => {
    //console.log("#####",a)
    return new Promise(resolve => {
        var fs = require('fs'),
    request = require('request');

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
      if ((res.headers['content-type'] != 'image/jpeg')&&(res.headers['content-type'] !='image/png')) {
          console.log('#########',res.headers['content-type']);
          resolve(0);
    }
    //console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

        download(sre, 'google'+a+'.png', function () {
            var x = resizeImage('google'+a+'.png');
            resolve(x);
});
        //resolve("failure");
        
    })
}
ex.expose({
    async hashed(password) {
        f = password.split(" ")
        //var a = f[0];//console.log( f[1]);
        var x = await y(f[0],f[1]);
      return x;

  }
})