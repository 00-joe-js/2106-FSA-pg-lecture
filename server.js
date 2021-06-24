const express = require("express");
const app = express();

const client = require("./db-client");

app.get("/facilities-data", async (req, res, next) => {
    try {
        const facilitiesQueryResult = await client.query(`SELECT * FROM cd.facilities`);
        res.send(facilitiesQueryResult.rows);
    } catch (e) {
        next(e);
    }
});

app.use((err, req, res, next) => {
    res.status(500);
    res.send(err);
});

app.listen(8080, () => {
    console.log("Server is listening!");
});

