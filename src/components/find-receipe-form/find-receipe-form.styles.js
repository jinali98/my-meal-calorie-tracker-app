import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

export const Form = styled.form`
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const useStylesForForm = makeStyles({
  searchField: {
    width: "300px",
  },
  mealtypeField: {
    width: "200px",
  },
});
