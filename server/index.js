const express = require('express');
const app = express();
const path = require("path");
const cors = require("cors");
const httpProxy = require("http-proxy");

const proxy = httpProxy.createProxyServer({});

app.use(cors());

app.use(express.static(__dirname + '/../client'));
app.listen(2222, () => {
    console.log("listening on port 2222");
})

app.all('/api/listings/:listingID/reviews', (req, res) => {
    proxy.web(req, res, {
        target: "http://ec2-52-8-43-87.us-west-1.compute.amazonaws.com:2500"
      });
} )

app.all('/api/vq/p/rentals', (req, res) => {
    proxy.web(req, res, {
        target: "http://ec2-3-101-25-105.us-west-1.compute.amazonaws.com/"
      });
} )


app.all('/api/listing/', (req, res) => {
    proxy.web(req, res, {
        target: "http://http://ec2-3-15-34-87.us-west-1.compute.amazonaws.com/1"
      });
} )

app.all('/reservation/api/*', (req, res) => {
    proxy.web(req, res, {
        target: "http://54.177.65.149:3000"
      });
} )
