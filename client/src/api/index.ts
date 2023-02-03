import axios, { AxiosError } from "axios"
import { ICatViewModel } from "./CatTypes"

export class CatsApi {
    static async getAllBreeds(): Promise<ICatViewModel[]> {
        try {
            await axios.get("http://localhost:3001/allCats").then(response => {
                console.log(response)
            })
        } catch (error) {
            throw error as AxiosError
        }
    }

    static async get(): Promise<ICatViewModel> {
        try {
            const response = await axios.get("https://api.thecatapi.com/v1/breeds/")
            return response
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
