import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectFetchedReceipes } from "../../store/receipes/receipes.selectors";
import EmptyMessage from "../empty-message/empty-message.component";
const ReceipeCardContainer = ({ receipes }) => {
  return (
    <div>
      {receipes ? (
        <div>
          <img src="" alt="" />
          <p>receipe.label</p>
          <p>calories</p>
          <p>total weight</p>
        </div>
      ) : (
        <EmptyMessage>You Haven't found any Receipes yet!</EmptyMessage>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  receipes: selectFetchedReceipes,
});

export default connect(mapStateToProps)(ReceipeCardContainer);
