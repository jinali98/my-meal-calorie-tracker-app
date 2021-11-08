import { makeStyles } from "@material-ui/core/styles";

import styled from "styled-components";
import { Form } from "../find-receipe-form/find-receipe-form.styles";

export const CalorieCOunterForm = styled(Form)`
  width: 40%;
`;

export const useStylesForCalorieCounterForm = makeStyles({
  searchField: {
    width: "300px",
  },
  amountField: {
    width: "100px",
  },
});
