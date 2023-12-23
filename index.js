const express = require("express"),
  app = express(),
  port = 3000,
  EventEmitter = require("events"),
  eventEmitter = new EventEmitter();

let tasks = [];

app.get("/", (req, res) => {
  tasks.push(function () {
    return res.headers;
  });

  const hugeArray = new Array(100000000).fill(req);

  req.user = {
    id: 1,
    username: "Inefficient User",
    badObject: req,
    hugeArray,
  };

  eventEmitter.on("start", () => {
    console.log("useless evenet emitter");
  });

  setTimeout(() => {
    res.send("Hello world");
  });
});

app.listen(port, () => console.log("server is running"));
