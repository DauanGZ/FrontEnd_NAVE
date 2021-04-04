import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { putPost } from "../services/posts";
import Form from "../components/Form";
import { StyledForm, StyledTitleForm } from "../styles/styled.js"

const UpdatePost = ( {location: {state: {item: post}}} ) => {
  const history = useHistory();

  const onSubmit = async (update) => {
    try {
      await putPost(update);
      toast.success("Post salvo com sucesso!!");
      history.push("/");
    } catch(error) {
      toast.error("Oops!! Houve um problema com a atualização do post");
      console.log("ERRO: ", error);
    }
  };

  return (
    <StyledForm className="container">
      <StyledTitleForm>Editar uma publicação</StyledTitleForm>
      <Form post={post} nameButtonAction="Salvar" onSubmit={onSubmit}/>
    </StyledForm>
  );
};

export default UpdatePost;
