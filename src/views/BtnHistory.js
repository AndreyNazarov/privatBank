import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

import AddIcon from '@material-ui/icons/Add';
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));
export default function IconLabelButtons() {
  const classes = useStyles();
  let history = useHistory();

  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      endIcon={<AddIcon />}
      onClick={() => history.push(`/transactions`)}
    >
      Exchange
    </Button>
  );
}
