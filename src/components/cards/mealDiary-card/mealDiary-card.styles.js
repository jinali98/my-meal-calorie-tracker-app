import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { color_3, color_4 } from "../../../globalStyles";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 3px solid ${color_3};
`;
export const QuantityWrapper = styled.div`
  width: 50%;
  margin: auto;
  margin-bottom: 10px;
`;
export const ResultWrapper = styled.div`
  text-align: center;

  /* background-color: ${color_3}; */
  padding: 10px;
  border-radius: 8px;
`;

export const useStyles = makeStyles({
  mealType: {
    padding: "2px 8px",
    borderRadius: "4px",
    color: `${color_4}`,
  },
});
