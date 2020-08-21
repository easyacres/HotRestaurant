const path = require("path");

module.exports = app => {
    app.get("/", (req, res) => {
        // send back to home page
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });
}