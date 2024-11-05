const express = require("express");
const app = express();
const port = 80;
app.get("/", (req, res) => {
  res.status(200).send("This is home page");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.post("/about", (req, res) => {
    res.send("This is post request in about page");
  });

  app.post("/this", (req, res) => {
    res.status(404).send("This page is not found.");
  });
  
app.get("/contact", (req, res) => {
  res.send("This is contact page");
});

app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});
