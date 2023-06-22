import axios from 'axios'

export const CarService = {
    async getAll() {
        const response = await axios.get('https://dummyjson.com/products')

        return response.data
    },
    async getById(id) {
        const response = await axios.get(`https://dummyjson.com/products/${id}`)

        return response.data
    }
}