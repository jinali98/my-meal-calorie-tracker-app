import {
  CardActions,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import { mealTypes } from "../../../constants/mealTypes";
import { DeleteButton, UpdateButton } from "../../buttons/buttons.component";
import CustomCard from "../../custom-card/custom.card.component";
import CustomTitle from "../../custom-title/custom-title.component";
import {
  HeaderWrapper,
  QuantityWrapper,
  ResultWrapper,
  useStyles,
} from "./mealDiary-card.styles";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import { removeMealCard } from "../../../store/meal-diary/mealdiary.actions";
import { connect } from "react-redux";

const MealDiaryCard = ({ card, removeCard }) => {
  const { date, mealType, totalCal, nutrients } = card;

  const classess = useStyles();
  return (
    <CustomCard>
      <CardContent>
        <HeaderWrapper>
          <CustomTitle color="primary" variant="h6">
            {date}
          </CustomTitle>
          <CustomTitle
            className={classess.mealType}
            variant="h6"
            style={{ backgroundColor: `${mealTypes[mealType].color}` }}
          >
            {mealType}
          </CustomTitle>
        </HeaderWrapper>
        <QuantityWrapper>
          {nutrients.map((each) => (
            <CustomTitle key={Math.random()} variant="subtitle1">
              {`${each.name} : ${each.grams}g : ${each.percentage}%`}
            </CustomTitle>
          ))}
        </QuantityWrapper>
        <ResultWrapper>
          <CustomTitle className={classess.total} variant="subtitle1">
            {`Total Calorie Intake is ${totalCal} kcl`}
          </CustomTitle>
          <List>
            {nutrients.map((each) => (
              <ListItem key={Math.random()}>
                <ListItemIcon>
                  {each.mood === "good" && (
                    <SentimentVerySatisfiedIcon className={classess.goodIcon} />
                  )}
                  {each.mood === "bad" && (
                    <SentimentVeryDissatisfiedIcon
                      className={classess.badIcon}
                    />
                  )}
                </ListItemIcon>
                <ListItemText primary={each.review} />
              </ListItem>
            ))}
          </List>
        </ResultWrapper>
      </CardContent>
      <CardActions>
        <UpdateButton />
        <DeleteButton onClick={() => removeCard(card)} />
      </CardActions>
    </CustomCard>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeCard: (item) => dispatch(removeMealCard(item)),
});
export default connect(null, mapDispatchToProps)(MealDiaryCard);
