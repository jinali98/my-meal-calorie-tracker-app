import { makeStyles } from "@material-ui/core";
import styled from "styled-components";

export const ReceipePageContainer = styled.div`
  width: 80vw;
  margin: 50px auto;

  @media (max-width: 768px) {
    width: 90vw;
    margin: 50px auto;
  }
`;

export const useFindReceipeTitle = makeStyles({
  title: {
    width: "55%",
    // margin: "20px auto",
    margin: "auto",
    textAlign: "center",
  },
});
