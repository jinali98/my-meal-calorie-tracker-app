import { CardContent, Chip } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { cuisineTypeList } from "../../../constants/cuisineType";
import { addOrRemoveReceipe } from "../../../store/cook-book/cook-book.actions";
import { AddRemoveButton, ViewButton } from "../../buttons/buttons.component";
import CustomCard from "../../custom-card/custom.card.component";
import CustomTitle from "../../custom-title/custom-title.component";
import {
  ButtonGrp,
  ChipGrp,
  ReceipeContent,
  ReceipeImage,
  useStyles,
} from "./recipe.styles";

const RecipeCard = ({ recipeData, toggle, history }) => {
  const {
    name,
    calories,
    cuisineType,
    dietTypes,
    imageUrl,
    ingredientList,
    totalNutrients,
    receipeUrl,
  } = recipeData;

  const classess = useStyles();

  return (
    <CustomCard>
      <CardContent className={classess.root}>
        <ReceipeContent>
          <ReceipeImage src={imageUrl} alt={name} />
          <CustomTitle color="primary" variant="h6">
            {name}
          </CustomTitle>
          <CustomTitle color="primary" variant="h6">
            Calories : {calories}kcl
          </CustomTitle>
        </ReceipeContent>
        <ChipGrp>
          {cuisineType.map((each) => (
            <Chip
              label={cuisineTypeList[each].type}
              color="primary"
              style={{
                backgroundColor: `${cuisineTypeList[each].color}`,
              }}
            />
          ))}
        </ChipGrp>
        <ButtonGrp>
          <ViewButton onClick={() => history.push(`/recipe/${name}`)} />
          <AddRemoveButton onClick={() => toggle(recipeData)}>
            heart
          </AddRemoveButton>
        </ButtonGrp>
      </CardContent>
    </CustomCard>
  );
};
const mapDispatchToProps = (dispatch) => ({
  toggle: (receipe) => dispatch(addOrRemoveReceipe(receipe)),
});

export default withRouter(connect(null, mapDispatchToProps)(RecipeCard));
