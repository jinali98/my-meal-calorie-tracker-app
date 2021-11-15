import { makeStyles } from "@material-ui/styles";
import styled from "styled-components";

export const ReceipeImage = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 8px;
`;

export const ChipGrp = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 10px 0;
`;

export const ButtonGrp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ReceipeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`;

export const useStyles = makeStyles({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
