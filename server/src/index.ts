import express, { Response, Request } from "express"
import cors from "cors"
import { getBreeds, getBreed } from "./services/cat.service"
import path from "path"

const PORT = process.env.PORT || 3001

const app = express()
app.use(cors())
// app.use("/client", express.static("../../client"))
app.use(express.static(path.resolve(__dirname, "../../client")));

app.get("/api", (req: Request, res: Response) => {
    res.json({
        message: "Hello!"
    })
})

// get all breeds
app.get("/breeds", (req: Request, res: Response) => {
    getBreeds().then((response) => {
        res.send(response)
    }).catch(error => console.log(error))
})

// get one specific breed
app.get("/breeds/:code", (req: Request, res: Response) => {
    getBreed(req.params.code).then((response) => {
        res.send(response)
    }).catch(error => console.log(error))
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})
