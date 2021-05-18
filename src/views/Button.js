import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import { Route, useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export function UploadButtons() {
  let history = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="secondary" component="span">
          <HomeRoundedIcon onClick={() => history.push('/')} />
        </Button>
      </label>
    </div>
  );
}

export function PhotoButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload transactions
        </Button>
      </label>
      <input
        accept="image/*"
        className={classes.input}
        id="icon-button-file"
        type="file"
      />
    </div>
  );
}

// export default { UploadButtons, PhotoButtons };
