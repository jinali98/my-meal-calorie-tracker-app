import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectErrorMessageState,
  selectFetchedCalorieDataState,
} from "../../store/calorie-counter/calorie-counter.selectors";
import CalorieTable from "../calorie-table/calorie-table.component";
import { ErrorMessage } from "../titles/titles.component";

const CalorieCounterResult = ({ data, error }) => {
  return (
    <div>
      {/* check the length of the nutrients array to find wether there is data */}
      {data?.nutrients.length > 0 && (
        <div>
          <p>Calories : {data.calories}</p>
          <p>totalWeight: {data.totalWeight}</p>
          <CalorieTable />
        </div>
      )}

      {/* if the array length is 0 there is no data to display */}
      {data?.nutrients.length === 0 && (
        <ErrorMessage>No Result Found</ErrorMessage>
      )}
      {/* if there is an error display the error */}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  data: selectFetchedCalorieDataState,
  error: selectErrorMessageState,
});
export default connect(mapStateToProps)(CalorieCounterResult);
