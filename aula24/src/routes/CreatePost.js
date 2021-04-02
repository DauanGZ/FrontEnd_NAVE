import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import Form from "../components/Form";

import { createPost } from "../services/posts";

import "../styles/style.css";

const CreatePost = () => {
  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      await createPost(data);
      toast.success("Post criado com sucesso!!");
      history.push("/");
    } catch(error) {
      toast.error("Oops!! Houve um problema com a criação do post");
      console.log("ERRO: ", error);
    }
  };

  return (
    <div className="container">
      <h1>Criar uma nova publicação</h1>
      <Form onSubmit={onSubmit}/>
    </div>
  );
};

export default CreatePost;
