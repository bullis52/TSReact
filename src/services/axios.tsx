import axios from "axios"
import {IPost} from "../model/model";

const axiosInstance = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
})

const getPosts = () => {
  return axiosInstance.get<IPost[]>('/posts')
}
export {getPosts}