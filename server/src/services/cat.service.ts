import axios, { AxiosError } from "axios"
import { CatModel } from "../models/cat.model"
import { Response, Request } from "express"
import { CatViewModel } from "../models/cat.viewModel"

export class CatService {
    static async getAll(): Promise<CatModel[]> {
        try {
            const response = await axios.get("https://api.thecatapi.com/v1/breeds/")
            return response.data
        } catch (error) {
            throw error as AxiosError
        }
    }

    static async getOne(code: string): Promise<CatModel> {
        try {
            const response = await axios.get(`https://api.thecatapi.com/v1/breeds/${code}`)
            return response.data
        } catch (error) {
            throw error as AxiosError
        }
    }
}

export async function getBreeds(): Promise<CatViewModel[]> {
    try {
        const cats: CatModel[] = await CatService.getAll()
        const result = cats.map((c) => CatViewModel.fromModel(c))

        return result
    } catch (error) {
        throw error
    }
}

export async function getBreed(code: string): Promise<CatViewModel> {
    try {
        const cat: CatModel = await CatService.getOne(code)
        const result = CatViewModel.fromModel(cat)

        return result
    } catch (error) {
        throw error
    }
}
