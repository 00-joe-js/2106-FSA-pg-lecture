const express = require("express");
const router = express.Router();

const client = require("./db-client");

router.get("/facilities-data", async (req, res, next) => {
    try {
        const facilitiesQueryResult = await client.query(`SELECT * FROM cd.facilities;`);
        res.send(facilitiesQueryResult.rows);
    } catch (e) {
        next(e);
    }
});

router.get("/members-page", async (req, res, next) => {

    const membersQueryResult = await client.query(`SELECT firstname, surname FROM cd.members`);
    
    const liElements = membersQueryResult.rows.map(eachRow => {
        return `<li>${eachRow.firstname} ${eachRow.surname}</li>`;
    }).join("");

    res.send(`
        <!DOCTYPE html>
        <html>
            <head><title>Members Page ${membersQueryResult.rowCount}</title></head>
            <style>
                body {
                    background: gray;
                }
                li {
                    color: blanchedalmond;
                }
            </style>
            <body>
                <ul>
                    ${liElements}
                </ul>
            </body>
        </html>
    `);

});

module.exports = router;