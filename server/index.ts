import { Response, Request } from "express"
import express from "express"
import { CatModel } from "./models/cat.model"
import { CatService } from "./services/cat.service"

const PORT = process.env.PORT || 3001
const app = express()
const router = express.Router()

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')))

app.get("/api", (req, res) => {
    res.json({
        message: "Hello from CatWiki!"
    })
})

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})

const getCats = async (req: Request, res: Response): Promise<void> => {
    try {
        const cats: CatModel[] = await CatService.getAll()
        cats.forEach(cat => {

        })
    } catch (error) {
        throw error
    }
}

const getCat = async (req: Request, res: Response): Promise<void> => {
    try {
        const cat: CatModel = await CatService.get(req.params.code)

    } catch (error) {
        throw error
    }
}
