"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var cat_service_1 = require("./services/cat.service");
var PORT = process.env.PORT || 3001;
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use("/client", express_1.default.static("../../client"));
app.get("/api", function (req, res) {
    res.json({
        message: "Hello!"
    });
});
// app.get("/breeds", (req: Request, res: Response) => {
//     axios.get("https://api.thecatapi.com/v1/breeds/").then((response) => {
//         res.send(response.data)
//     }).catch(error => console.log(error))
// })
app.get("/breeds", function (req, res) {
    (0, cat_service_1.getBreeds)().then(function (response) {
        res.send(response);
    }).catch(function (error) { return console.log(error); });
});
app.get("/breeds/:code", function (req, res) {
    (0, cat_service_1.getBreed)(req.params.code).then(function (response) {
        res.send(response);
    }).catch(function (error) { return console.log(error); });
    // axios.get(`https://api.thecatapi.com/v1/breeds/${req.params.code}`).then(function (response) {
    //     res.send(response.data)
    // }).catch(error => console.log(error))
});
app.listen(PORT, function () {
    console.log("Server listening on ".concat(PORT));
});
