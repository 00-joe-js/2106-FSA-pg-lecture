const express = require("express");
const app = express();

const dataRouter = require("./club-data-router");

// 1
app.use((req, res, next) => {
    console.log("The method of the HTTP request message is " + req.method);
    req.joe = true;
    next();
});

app.use(dataRouter);

// 3
app.use((err, req, res, next) => {
    res.status(500);
    res.send(err);
});

app.listen(8080, () => {
    console.log("Server is listening!");
});

