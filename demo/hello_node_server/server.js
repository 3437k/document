const express = require("express");
const app = express();
const port = 9090;

app.get("/", (req, res) => {
  console.log(1);
  res.json({ message: "1" });
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
});
