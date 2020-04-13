import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import { Field, reduxForm } from 'redux-form';
import SignInValidate from './signin-validation';


const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const renderField = ({
  input,
  label,
  meta: { touched, invalid, error },
  ...custom
}) => (
    <TextField
      variant="outlined"
      margin="normal"
      fullWidth
      label={label}
      error={touched && invalid}
      helperText={touched && error}
      autoComplete={label}
      // autoFocus
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        ),
      }}
      {...input}
      {...custom} />
  )

const SignIn = props => {
  const { handleSubmit } = props;
  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit}>
      <Field name="email" component={renderField} label="Email Address" />
      <Field name="password" component={renderField} label="Password" type="password" />

      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2" color="textSecondary">
            Lost your password?
              </Link>
        </Grid>
      </Grid>
      <div>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          LOG IN
          </Button>
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'SignIn', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate: SignInValidate,
})(SignIn);