// Importing Required Packages
const { youtube } = require("ytdownloader-fts");
const express = require('express');
// const request = require('request-promise');
// Creating app instance
const app = express();
// Creating a PORT
const PORT = process.env.PORT || 5000;
// Enabling app to use json
app.use(express.json());
// routing
app.get('/', (req, res) => {
    res.send("Welcome TO YT-API")
})
// Creating yt endpoint to get response
app.get('/yt', async (req, res) => {
    const url = req.query.url;
    // let response;
    // "https://www.youtube.com/watch?v=be9sHQ7xqo0&ab_channel=JavaScriptMastery"
    try {
        youtube(url.toString()).then(function (response) {
            res.json(response);
        });
    } catch (error) {
        res.json(error);
    }



})
app.listen(PORT, () => console.log(`Server Running On PORT ${PORT}`))