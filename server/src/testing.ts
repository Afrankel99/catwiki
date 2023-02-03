// import { Response, Request, Express } from "express"
// import express from "express"
// import { CatModel } from "./models/cat.model"
// import { CatService } from "./services/cat.service"
// import path from "path"
// import axios from "axios"

// const PORT = process.env.PORT || 3001
// const app = express()
// // const router = express.Router()

// // Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, '../client/build')))

// app.get("/", (req, res) => {
//     res.json({ message: "Hello from CatWiki!" });
// });

// // app.get("/allCats", (req, res) => {
// //     axios.get("https://api.thecatapi.com/v1/breeds/").then(response => {
// //         console.log(response)
// //         res.json(response)
// //     }).catch(error => console.log(error))
// // })

// // // All other GET requests not handled before will return our React app
// // app.get('*', (req: Request, res: Response) => {
// //     res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
// // })

// app.listen(PORT, () => {
//     console.log(`Server listening on ${PORT}`)
// })