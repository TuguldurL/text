const express = require("express");

// const mongoose = require("mongoose");

const connect = require("./helper/db")
connect();


// const routes = require("./routes/routes");
const PORT = 5000;
const app = express();

app.get("/", (req, res) => {
    res.send("todo list backend");
});


app.get("/test", (req, res) => {
    res.send("this is test end point");
});


// Routes
// app.use(routes);

app.listen(PORT, () =>
  console.log("Server running on port local host: " + PORT)
);
