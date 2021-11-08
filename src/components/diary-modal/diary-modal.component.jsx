import { Dialog } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsModalOpen } from "../../store/meal-diary/mealdiary.selectors";

const DiaryModal = ({ isModalOpen }) => {
  return <Dialog open={isModalOpen}>form to be created</Dialog>;
};

const mapStateToProps = createStructuredSelector({
  isModalOpen: selectIsModalOpen,
});

export default connect(mapStateToProps)(DiaryModal);
