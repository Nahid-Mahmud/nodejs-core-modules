const http = require("http");
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
