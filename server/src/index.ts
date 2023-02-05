import express, { Response, Request } from "express"
import axios from "axios"
import cors from "cors"
import { CatService, getBreeds, getBreed } from "./services/cat.service"
import { CatViewModel } from "./models/cat.viewModel"

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
    getBreeds().then((response) => {
        res.send(response)
    }).catch(error => console.log(error))
})

app.get("/breeds/:code", (req: Request, res: Response) => {
    getBreed(req.params.code).then((response) => {
        res.send(response)
    }).catch(error => console.log(error))
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})
