import express from "express";
const appp = express();

appp.get('/', (req, res) => {
  res.send("helllo");
});

appp.listen(5100, () => {
  console.log("server running....");
});
