import React from "react";
import PropTypes from "prop-types";

// material

import { TableRow, TableCell, IconButton } from "@mui/material";
import TrashIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
  tableBody: {
    ...theme.typography.globalText,
  },
  editIcon: {
    color: `${theme.palette.success.main} !important`,
    "&:hover": {
      background: "transparent",
    },
  },
  deleteIcon: {
    color: `${theme.palette.error.main} !important`,
    "&:hover": {
      background: "transparent",
    },
  },
}));

const TodoItems = ({ id, name, age, color, index, editList, deleteList }) => {
  const classes = useStyles();

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row" className={classes.tableBody}>
        {index + 1}
      </TableCell>
      <TableCell align="center" className={classes.tableBody}>
        {name}
      </TableCell>
      <TableCell align="center" className={classes.tableBody}>
        {age}
      </TableCell>
      <TableCell align="center" className={classes.tableBody}>
        {color}
      </TableCell>
      <TableCell align="center">
        <IconButton className={classes.editIcon} onClick={() => editList(id)}>
          <EditIcon />
        </IconButton>
        <IconButton
          className={classes.deleteIcon}
          onClick={() => deleteList(id)}
        >
          <TrashIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

TodoItems.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  editList: PropTypes.func.isRequired,
  deleteList: PropTypes.func.isRequired,
};

export default TodoItems;
