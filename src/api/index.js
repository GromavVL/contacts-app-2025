import axios from 'axios'


const axiosInstans = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

export const getPosts = () => axiosInstans.get('/posts');