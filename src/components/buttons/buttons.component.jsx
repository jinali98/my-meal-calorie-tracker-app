import CustomIconButton from "../custom-icon-button/custom-icon-button.component";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
export const DeleteButton = ({ onClick }) => {
  return (
    <CustomIconButton
      onClick={onClick}
      ariaLabel="remove"
      variant="contained"
      color="primary"
    >
      <DeleteIcon />
    </CustomIconButton>
  );
};
export const UpdateButton = ({ onClick }) => {
  return (
    <CustomIconButton
      onClick={onClick}
      ariaLabel="edit"
      variant="contained"
      color="primary"
    >
      <EditIcon />
    </CustomIconButton>
  );
};
