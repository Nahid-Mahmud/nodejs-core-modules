const http = require("http");
const path = require("path");
const os = require("os");
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("messageLogged", (event) => {
  console.log("Listener called", event);
});

emitter.on("logging", (event) => {
  console.log("Logging listener called", event);
});

emitter.emit("messageLogged", {
  id: 1,
  url: "http://",
});

emitter.emit("logging", {
  email: "example@gmail.com",
  name: "example",
});

const totalMemory = os.totalmem();
const freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hitting the root route");
    res.end();
  }
  if (req.url === "/api/courses") {
    res.write(
      JSON.stringify([
        {
          id: 1,
          name: "course1",
        },
        {
          id: 2,
          name: "course2",
        },
        {
          id: 3,
          name: "course3",
        },
      ])
    );
    res.end();
  }
});
// server.on("connection", (socket) => {
//   console.log("New connection...");
// });
server.listen(3000);
console.log("listening on port 3000");
