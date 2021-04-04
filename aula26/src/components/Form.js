import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { StyledLabel, StyledTextField, StyledButton, StyledButtonOrganize } from "../styles/styled.js"
import "../styles/style.css";

const Form = ({ post, nameButtonAction, onSubmit }) => { // nameButtonAction, {onSubmit}, post
  const { register, handleSubmit } = useForm();

  return (
    <form className="container" onSubmit={handleSubmit(onSubmit)}>

      <StyledLabel>Título</StyledLabel>

      <StyledTextField
      margin="dense"
      variant="outlined"
      fullWidth
      inputProps={{ ref:register, name:"title", defaultValue:post.title}} />  
  
      <StyledLabel>Descrição</StyledLabel>
      
      <StyledTextField
      margin="dense"
      variant="outlined"
      fullWidth
      inputProps={{ ref:register, name:"body", defaultValue:post.body }} />

      <input type="hidden" ref={register} name="id" defaultValue={post.id} />
  
      
      <StyledButtonOrganize>

        <StyledButton
        type="submit"
        className="info"
        variant="contained"
        color="primary" >
          {nameButtonAction}
        </StyledButton>

        <Link to="/">
          <StyledButton
          type="button"
          className="cancel"
          variant="contained">
            Cancelar
          </StyledButton>
        </Link>

      </StyledButtonOrganize>
    </form>
  );
};

export default Form;
