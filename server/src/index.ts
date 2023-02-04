import express, { Response, Request } from "express"
import axios from "axios"
import cors from "cors"

const PORT = process.env.PORT || 3001

const app = express()
app.use(cors())
app.use("/client", express.static("../../client"))

app.get("/api", (req: Request, res: Response) => {
    res.json({
        message: "Hello!"
    })
})

app.get("/breeds", (req: Request, res: Response) => {
    axios.get("https://api.thecatapi.com/v1/breeds/").then((response) => {
        console.log(response)
        res.send(response.data)
    }).catch(error => console.log(error))
})

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

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})