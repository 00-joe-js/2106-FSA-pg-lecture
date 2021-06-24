const express = require("express");

const router = express.Router();

router.get("/new-member-form", (req, res) => {

    res.send(
        `
            <!DOCTYPE html>
            <html>
                <head><title>New Member Form</title></head>
                <body>
                    <form action="/members" method="POST">
                        <input name="firstname" type="text" placeholder="Member first name" />
                        <input name="surname" type="text" placeholder="Member last name" />
                        <button type="submit">Add New Member</button>
                    </form>
                </body>
            </html>
        `
    );

});

router.post("/members", (req, res) => {
    console.log(req.body);
    console.log("Create a new record in the database using this information", req.body.firstname, req.body.surname);
    res.send("hello");
});

module.exports = router;