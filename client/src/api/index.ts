import axios, { AxiosError } from "axios"

class CatsApi {
    static async getAllBreeds(): Promise<ICatBreed> {
        try {
            const response = await axios.get("https://api.thecatapi.com/v1/breeds/") 
        } catch (error) {
            throw error as AxiosError
        }
    }

    static async get(): Promise<ICatBreed> {
        try {
            const response = await axios.get("https://api.thecatapi.com/v1/breeds/") 
        } catch (error) {
            throw error as AxiosError
        }
    }
}