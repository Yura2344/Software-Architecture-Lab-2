const express = require("express");
const axios = require("axios").default;
const config = require("./config");

const app = express();

app.get("/", (req, res) => {
    axios.get(`${config.get('api_url')}`)
        .then((response) => res.send(`Message from api: ${response.data}`));
});

module.exports = app;