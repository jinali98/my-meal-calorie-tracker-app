import React, { useState } from "react";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import CustomButton from "../custom-button/custom-button.component";
import DiaryModal from "../diary-modal/diary-modal.component";
import { toggleModalButton } from "../../store/meal-diary/mealdiary.actions";
import { connect } from "react-redux";
const DiaryModalContainer = ({ toggleModal }) => {
  return (
    <div>
      <CustomButton
        onClick={toggleModal}
        ariaLabel="add-button"
        variant="contained"
        color="secondary"
        type="button"
      >
        <AddRoundedIcon fontSize="large" />
      </CustomButton>
      <DiaryModal />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleModalButton()),
});

export default connect(null, mapDispatchToProps)(DiaryModalContainer);
