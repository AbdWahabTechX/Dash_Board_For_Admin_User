import axios from "axios";

const API = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
})

// Get method

export const getPost = () =>{
    return API.get("/posts");
}

// Delete method

export const deletePost = (id) =>{
    return API.delete(`/posts/${id}`);
}
// Post Method 
export const Addpost = () =>{
    return API.post("/posts");
}

//  Update Method

export const UpdatePost = (id, post) =>{
    return API.put(`/posts/${id}`, post)
}