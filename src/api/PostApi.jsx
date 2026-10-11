import axios from "axios";

const api = axios.create({ BaseUrl: "https://jsonplaceholder.typicode.com" });

//get method to fetch posts
const getPosts = () => {
    return api.get("/posts");
}
