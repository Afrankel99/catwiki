import axios from "axios"
import { CatModel } from "../models/cat.model"
import { Response, Request } from "express"
import { CatViewModel } from "../models/cat.viewModel"

export class CatService {
    static async getAll(): Promise<CatModel[]> {
        return await axios.get("https://api.thecatapi.com/v1/breeds/")
    }

    static async get(code: string): Promise<CatModel> {
        return await axios.get(`https://api.thecatapi.com/v1/breeds/${code}`)
    }
}

export const getCats = async (req: Request, res: Response): Promise<CatViewModel[]> => {
    try {
        const cats: CatModel[] = await CatService.getAll()
        const catViewModels = cats.map((c) => CatViewModel.fromModel(c))

        return catViewModels
    } catch (error) {
        throw error
    }
}

// const getCat = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const cat: CatModel = await CatService.get(req.params.code)

//     } catch (error) {
//         throw error
//     }
// }