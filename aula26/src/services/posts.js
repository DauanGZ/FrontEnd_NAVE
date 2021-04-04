import client from "axios";

const api = "https://jsonplaceholder.typicode.com"; // Requisições observadar no network!

export const getPostsList = () => client.get(api + "/posts");

export const createPost = ({title, body}) => client.post(api + "/posts", {title, body});

export const getPost = (id) => client.get(api + "/posts/" + id);

export const putPost = (data) => client.put(api + "/posts/" + data.id, data);

export const deletePost = (id) => client.delete(api + "/posts/" + id);
