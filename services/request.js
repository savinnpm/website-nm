const https = require('follow-redirects').https;

const get = (url) => {
  const urlObj = new URL(url)

  return new Promise(function (resolve, reject) {
    let options = {
      'method': 'GET',
      'hostname': urlObj.hostname,
      'path': urlObj.pathname,
      'headers': {
        'Authorization': `Bearer ${process.env.API_AUTH_TOKEN}`
      },
      'maxRedirects': 20
    };


    var req = https.request(options, function (res) {
      // reject on bad status
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return reject(new Error('statusCode=' + res.statusCode));
      }
      
      // cumulate data
      let chunks = [];

      res.on("data", (chunk) => {
        chunks.push(chunk);
      });

      res.on("end", () => {
        let body = Buffer.concat(chunks);
        resolve(body.toString());
      });

      res.on("error", (error) => {
        console.error(error);
      });
    });

    // reject on request error
    req.on('error', function (err) {
      // This is not a "Second reject", just a different sort of failure
      reject(err);
    });

    // important: end the request
    req.end()
  });
}

export const request = {
  get
}