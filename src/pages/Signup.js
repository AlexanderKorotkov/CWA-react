import { useDispatch } from "react-redux";
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {register} from "../actions/auth";
import { Link as RouterLink } from 'react-router-dom';
import * as Yup from 'yup'
import { Formik } from 'formik';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Signup = props => {

  const formInitValues = {
    companyName: '',
    email: '',
    password: '',
    repeatPassword: '',
  };

  const classes = useStyles();
  const dispatch = useDispatch();

  const signUpSchema = Yup.object().shape({
    companyName: Yup.string().required("Company name is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required"),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Password confirm is required'),
  });


  const signUp = async values => {
      dispatch(register(values));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <VpnKeyOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Formik initialValues={formInitValues}
                validationSchema={signUpSchema}
                onSubmit={signUp} >
          {(props) => {
            const {
              values,
              touched,
              errors,
              isValid,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
            } = props;
            return (
              <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="companyName"
                  label="Company Name"
                  type="text"
                  id="companyName"
                  autoComplete="company-name"
                  error={errors.companyName && touched.companyName}
                  value={values.companyName}
                  onBlur={handleBlur}
                  helperText={(errors.companyName && touched.companyName) && errors.companyName}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  error={errors.email && touched.email}
                  value={values.email}
                  onBlur={handleBlur}
                  helperText={(errors.email && touched.email) && errors.email}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  error={errors.password && touched.password}
                  value={values.password}
                  onBlur={handleBlur}
                  helperText={(errors.password && touched.password) && errors.password}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="repeatPassword"
                  label="repeatPassword"
                  type="password"
                  id="repeatPassword"
                  autoComplete="repeat-password"
                  error={errors.repeatPassword && touched.repeatPassword}
                  value={values.repeatPassword}
                  onBlur={handleBlur}
                  helperText={(errors.repeatPassword && touched.repeatPassword) && errors.repeatPassword}
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  disabled={!isValid || isSubmitting}
                >
                  Sign Up
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link component={RouterLink} to='/' variant="body2">
                      Already have an account? Sign In
                    </Link>
                  </Grid>
                </Grid>
              </form>
            )
          }}
        </Formik>
      </div>
    </Container>
  );
};

Signup.propTypes = {

};

export default Signup;
