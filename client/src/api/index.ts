import axios, { AxiosError } from "axios"
import { ICatViewModel } from "./CatTypes"

export class CatsApi {
    static async getAllBreeds(): Promise<ICatViewModel[]> {
        try {
            const response = await axios.get("http://localhost:3001/allCats")

            // return response
            return [
                {
                    name: "ragdoll",
                    id: "ragd",
                    description: "rengar"
                } as ICatViewModel
            ]
        } catch (error) {
            throw error as AxiosError
        }
    }

    static async getBreed(code: string): Promise<ICatViewModel> {
        try {
            const response = await axios.get(`http://localhost:3001/cat/${code}`)

            // return response
            return {
                name: "ragdoll",
                id: "ragd",
                description: "rengar"
            } as ICatViewModel
        } catch (error) {
            throw error as AxiosError
        }
    }
}
