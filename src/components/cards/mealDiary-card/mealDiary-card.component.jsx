import {
  CardActions,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
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
const MealDiaryCard = ({ card }) => {
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
            <CustomTitle variant="subtitle1">
              {`${each.name} : ${each.grams}g : ${each.percentage}%`}
            </CustomTitle>
          ))}
        </QuantityWrapper>
        <ResultWrapper>
          <CustomTitle variant="subtitle1">
            {`Total Calorie Intake is ${totalCal} kcl`}
          </CustomTitle>
          <List>
            {nutrients.map((each) => (
              // <CustomTitle variant="subtitle1">{each.review}</CustomTitle>
              <ListItem>
                <ListItemAvatar>
                  {each.mood === "good" && (
                    <SentimentVerySatisfiedIcon className={classess.goodIcon} />
                  )}
                  {each.mood === "bad" && (
                    <SentimentVeryDissatisfiedIcon
                      className={classess.badIcon}
                    />
                  )}
                </ListItemAvatar>
                <ListItemText primary={each.review} />
              </ListItem>
            ))}
          </List>
        </ResultWrapper>
      </CardContent>
      <CardActions>
        <UpdateButton />
        <DeleteButton />
      </CardActions>
    </CustomCard>
  );
};

export default MealDiaryCard;
//protein amount is low.
