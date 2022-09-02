const fs = require("fs");
const Web3 = require("web3");
const http = require("http");

const url = 'https://rpc.ankr.com/eth_rinkeby'
const port = process.env.PORT || 8000;

export default function hello(req, res) {
    res.statusCode = 200;
    res.writeHead(200, { "Content-type": "text/html" });
}

const server = http.createServer((req, res) => {
    const readstream = fs.createReadStream("./index.html");
    if (req.url == "/node_modules/web3/dist/web3.min.js") {
        fs.readFile("../node_modules/web3/dist/web3.min.js", "utf8", (err, file) => {
            if (err) {
                console.log(err);
            } else {
                res.write(file);
                res.end();
            }
        });

    } else if (req.url == "/node_modules/web3/dist/web3.min.js.map") {
        fs.readFile("../node_modules/web3/dist/web3.min.js.map", "utf8", (err, file) => {
            if (err) {
                console.log(err);
            } else {
                res.write(file);
                res.end();
            }
        });
    } else if (req.url == "/") {
        res.writeHead(200, { "Content-type": "text/html" });
        readstream.pipe(res);
    } else if (req.url == "/bitcoin_header.svg") {
        var img = fs.readFileSync('./bitcoin_header.svg');
        res.writeHead(200, { "Content-type": "image/svg+xml" });
        res.end(img, "binary");
    } else if (req.url == "/cryptopredictlogo2.png") {
        var img = fs.readFileSync('./cryptopredictlogo2.png');
        res.writeHead(200, { "Content-type": "image/png" });
        res.end(img, "binary");
    } else if (req.url == "/cryptopredictlogo.png") {
        var img = fs.readFileSync('./cryptopredictlogo.png');
        res.writeHead(200, { "Content-type": "image/png" });
        res.end(img, "binary");
    } else if (req.url == "/favicon.png") {
        var img = fs.readFileSync('./favicon.png');
        res.writeHead(200, { "Content-type": "image/png" });
        res.end(img, "binary");
    } else if (req.url == "/avax" || req.url == "/bnb" || req.url == "/eth") {
        res.write("More cryptocurrencies are coming soon!");
        res.end();
    } else {
        res.write("Oops. This page does not exist!");
        res.end();
    }
});

console.log("Server started!");
server.listen(port);