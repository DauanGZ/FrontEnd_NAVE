import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { createPost } from "../services/posts";
import Form from "../components/Form";
import { StyledForm, StyledTitleForm } from "../styles/styled.js"

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
    <StyledForm>
      <StyledTitleForm>Criar uma publicação</StyledTitleForm  >
      <Form post="" nameButtonAction="Criar" onSubmit={onSubmit} />
    </StyledForm>
  );
};

export default CreatePost;
