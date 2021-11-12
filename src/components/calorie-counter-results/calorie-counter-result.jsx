import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectFetchedCalorieDataState } from "../../store/calorie-counter/calorie-counter.selectors";
import CalorieTable from "../calorie-table/calorie-table.component";

const CalorieCounterResult = ({ data }) => {
  return (
    <div>
      {data ? (
        <div>
          <p>Calories : {data?.calories}</p>
          <p>totalWeight: {data?.totalWeight}</p>
          <CalorieTable />
        </div>
      ) : null}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  data: selectFetchedCalorieDataState,
});
export default connect(mapStateToProps)(CalorieCounterResult);
