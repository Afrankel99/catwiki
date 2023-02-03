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

    static async get(code: string): Promise<ICatViewModel> {
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

export const getData = async <T>(
    url: string,
    email: string,
    password: string
)
    : Promise<T> => {
    const res = await fetch(url, {
        method: 'Post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    return await res.json();
}
