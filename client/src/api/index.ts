import axios, { AxiosError } from "axios"
import { ICatViewModel } from "./CatTypes"

export class CatsApi {
    static async getAllBreeds(): Promise<ICatViewModel[]> {
        try {
            const response = await axios.get("http://localhost:3001/breeds")
            return response.data
        } catch (error) {
            throw error as AxiosError
        }
    }

    static async getBreed(code: string): Promise<ICatViewModel> {
        try {
            const response = await axios.get(`http://localhost:3001/breeds/${code}`)
            return response.data
        } catch (error) {
            throw error as AxiosError
        }
    }
}
