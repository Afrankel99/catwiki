"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var axios_1 = __importDefault(require("axios"));
var cors_1 = __importDefault(require("cors"));
var PORT = process.env.PORT || 3001;
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use("/client", express_1.default.static("../../client"));
app.get("/api", function (req, res) {
    res.json({
        message: "Hello!"
    });
});
app.get("/breeds", function (req, res) {
    axios_1.default.get("https://api.thecatapi.com/v1/breeds/").then(function (response) {
        console.log(response);
        res.send(response.data);
    }).catch(function (error) { return console.log(error); });
});
// app.get("/cat/:code", (req, res) => {
//     axios.get(`https://api.thecatapi.com/v1/breeds/${req.params.code}`).then(function (response) {
//         // console.log(response)
//         res.send(response.data)
//     }).catch(error => console.log(error))
// })
// // All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
// })
app.listen(PORT, function () {
    console.log("Server listening on ".concat(PORT));
});
