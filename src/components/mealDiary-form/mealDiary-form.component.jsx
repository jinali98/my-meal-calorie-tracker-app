import React from "react";
import { connect } from "react-redux";
import { toggleModalButton } from "../../store/meal-diary/mealdiary.actions";
import {
  CarbohydrateField,
  CloseButton,
  DateField,
  FatField,
  MealTypeField,
  ProteinField,
  SubmitButton,
} from "../mealdiary-form-fields/mealdiary-form-fields.component";
import { ButtonContainer, Form, FormContainer } from "./mealDiary-form.styles";

const MealDiaryForm = ({ closeWindow }) => {
  return (
    <FormContainer>
      <Form>
        <DateField />
        <MealTypeField />
        <CarbohydrateField />
        <ProteinField />
        <FatField />
      </Form>
      <ButtonContainer>
        <SubmitButton />
        <CloseButton onClick={closeWindow} />
      </ButtonContainer>
    </FormContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  closeWindow: () => dispatch(toggleModalButton()),
});

export default connect(null, mapDispatchToProps)(MealDiaryForm);
