import CustomIconButton from "../custom-icon-button/custom-icon-button.component";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
export const DeleteButton = () => {
  return (
    <CustomIconButton aria-label="remove" variant="contained" color="primary">
      <DeleteIcon />
    </CustomIconButton>
  );
};
export const UpdateButton = () => {
  return (
    <CustomIconButton aria-label="edit" variant="contained" color="primary">
      <EditIcon />
    </CustomIconButton>
  );
};
