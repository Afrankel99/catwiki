// import express, { Response, Request, Express } from "express"
// import path from "path"

const path = require('path');
const express = require("express");
const axios = require('axios').default;
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors())

// Have Node serve the files for our built React app
app.use(express.static(path.resolve("/client", "../../client/build"))); // this is broken - https://stackoverflow.com/questions/72607079/start-script-not-working-with-npm-start-but-works-fine-with-node-server-js

app.get("/api", (req, res) => {
    res.json({ message: "Hello from CatWiki!" });
});

app.get("/allCats", (req, res) => {
    axios.get("https://api.thecatapi.com/v1/breeds/").then(function (response) {
        // console.log(response)
        res.send(response.data)
    }).catch(error => console.log(error))
})

app.get("/cat/:code", (req, res) => {
    axios.get(`https://api.thecatapi.com/v1/${req.params.code}`).then(function (response) {
        // console.log(response)
        res.send(response.data)
    }).catch(error => console.log(error))
})


// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});