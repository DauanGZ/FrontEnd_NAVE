import { Button, TextField } from "@material-ui/core";
import styled from "styled-components";

// Orientação form e título //

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding: 0px;
`;

export const StyledTitleForm = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 33px;
  width: 335px;
  color: #333333;
  text-align: center;
  margin-bottom: 7px;
`;

// Elementos internos form //

export const StyledLabel = styled.label`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #212121;
  margin-right: auto;
  margin-top: 25px;
  margin-bottom: 11px;
`;

export const StyledTextField = styled(TextField)`
  border: 1px solid #C4C4C4;
  box-sizing: border-box;
  border-radius: 40px;
`;

export const StyledButton = styled(Button)`
  width: 95px;
  height: 36px;

`;

export const StyledButtonOrganize = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 26px;
`;