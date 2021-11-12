import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addMealCard,
  toggleModalButton,
} from "../../store/meal-diary/mealdiary.actions";
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

const MealDiaryForm = ({ closeWindow, addMealCard }) => {
  const [userInput, setUserInput] = useState({
    date: "",
    mealType: "",
    carbo: "",
    protein: "",
    fat: "",
  });

  const { date, mealType, carbo, protein, fat } = userInput;

  const inputChangeHandler = (props) => (e) => {
    setUserInput({ ...userInput, [props]: e.target.value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    addMealCard(userInput);
    setUserInput({
      date: "",
      mealType: "",
      carbo: "",
      protein: "",
      fat: "",
    });
  };

  return (
    <FormContainer>
      <Form onSubmit={formSubmitHandler}>
        <DateField onChange={inputChangeHandler("date")} value={date} />
        <MealTypeField
          onChange={inputChangeHandler("mealType")}
          value={mealType}
        />
        <CarbohydrateField
          onChange={inputChangeHandler("carbo")}
          value={carbo}
        />
        <ProteinField
          onChange={inputChangeHandler("protein")}
          value={protein}
        />
        <FatField onChange={inputChangeHandler("fat")} value={fat} />

        <ButtonContainer>
          <SubmitButton type="submit" />
          <CloseButton onClick={closeWindow} />
        </ButtonContainer>
      </Form>
    </FormContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  closeWindow: () => dispatch(toggleModalButton()),
  addMealCard: (item) => dispatch(addMealCard(item)),
});

export default connect(null, mapDispatchToProps)(MealDiaryForm);
