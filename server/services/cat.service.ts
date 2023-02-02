import axios from "axios"
import { CatModel } from "../models/cat.model"

export class CatService {
    static async getAll(): Promise<CatModel[]> {
        return await axios.get("https://api.thecatapi.com/v1/breeds/")
    }

    static async get(code: string): Promise<CatModel> {
        return await axios.get(`https://api.thecatapi.com/v1/breeds/${code}`)
    }
}