import { Chip } from "@material-ui/core";
import React from "react";
import { cuisineTypeList } from "../../../constants/cuisineType";
import { dietTypesList } from "../../../constants/dietTypes";
import { tableCells } from "../../../constants/tableCells";
import { convertToArray } from "../../../utils/convertToArray";
import CustomTable from "../../table/table.component";
import { RecipeName } from "../../titles/titles.component";
import {
  ContentWrapper,
  Image,
  IngredientList,
  LabelWrapper,
  ListAndTableWrapper,
  MainContentWrapper,
  RecipeWrapper,
} from "./recipe-container.styles";

const RecipeContainer = ({ recipe }) => {
  const {
    name,
    calories,
    cuisineType,
    dietTypes,
    imageUrl,
    ingredientList,
    totalNutrients,
    receipeUrl,
  } = recipe;

  console.log(convertToArray(totalNutrients));
  return (
    <RecipeWrapper>
      <RecipeName>{name}</RecipeName>
      <MainContentWrapper>
        <Image src={imageUrl} alt={name} />
        <ContentWrapper>
          <LabelWrapper>
            {cuisineType.map((type) => (
              <Chip
                label={cuisineTypeList[type].type}
                color="primary"
                style={{
                  backgroundColor: `${cuisineTypeList[type].color}`,
                }}
              />
            ))}
          </LabelWrapper>
          <LabelWrapper>
            {dietTypes.map((each) => (
              <Chip
                label={dietTypesList[each].name}
                color="primary"
                style={{
                  backgroundColor: `${dietTypesList[each].color}`,
                }}
              />
            ))}
          </LabelWrapper>
          <Chip label={`${calories}kcl`} color="primary" />

          <a href={receipeUrl}>View Full recipe</a>
        </ContentWrapper>
      </MainContentWrapper>
      <ListAndTableWrapper>
        <div>
          <h2>Nutrients Information</h2>

          <CustomTable
            rows={totalNutrients}
            cells={tableCells}
            labelName="label"
            quantityName="quantity"
            unitName="unit"
          />
        </div>
        <IngredientList>
          <h2>Ingredients</h2>
          {ingredientList.map((item) => (
            <li>{item}</li>
          ))}
        </IngredientList>
      </ListAndTableWrapper>
    </RecipeWrapper>
  );
};

export default RecipeContainer;
