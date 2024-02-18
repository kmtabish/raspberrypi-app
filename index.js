import express from "express";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { Server } from "socket.io";
import switchApp from "./controller/switch.js";
const app = express();
const server = createServer(app);
const io = new Server(server);

const __dirname = dirname(fileURLToPath(import.meta.url));
app.io = io;

app.get("/", (req, res) => {
  res.send({ name: "Khan M. Tabish" });
});

app.get("/send-msg", (req, res) => {
  switchApp(req, res);
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("msg", (msg) => {
    console.log("message: " + msg);
  });
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
