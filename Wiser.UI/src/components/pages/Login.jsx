import { Box, Container, Avatar, Paper } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import Lock from "@material-ui/icons/Lock";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import WiserTextField from "../common/WiserTextField";
import { validate, validateField } from "../../utils/formValidator";

import { useState } from "react";
import Joi from "joi-browser";
import WiserButton from "../common/WiserButton";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser, logoutUser } from "../../store/ducks/auth.duck";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { config } from "../../utils/config";
import { LOGIN_TOKEN } from "../../utils/constants";

const useStyles = makeStyles((theme) => ({
  mainSecondary: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.entities.auth);
  const classes = useStyles();
  let history = useHistory();
  const defaultFormData = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(defaultFormData);
  const [errors, setErrors] = useState({});
  const schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  useEffect(() => {
    if (LOGIN_TOKEN) dispatch(logoutUser());
    if (process.env.REACT_APP_ALLOW_TEST_AUTH) {
      setFormData(config.auth);
    }
  }, [dispatch]);
  const handleSignIn = (e) => {
    if (validate(e, formData, schema, setErrors)) {
      dispatch(loginUser(formData, history));
      setFormData(defaultFormData);
    }
  };

  const handleTextFieldChange = (e) => {
    validateField(e, schema, errors);
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
  };

  return (
    <Container style={{ marginTop: "10%" }} component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar className={classes.mainSecondary}>
            <Lock />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
        </Box>
        <Box onSubmit={handleSignIn} component="form">
          {auth.message && <Alert severity="error">{auth.message}</Alert>}
          <WiserTextField
            fullWidth
            id="username"
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleTextFieldChange}
            error={errors.username && true}
            helperText={errors.username}
          />
          <WiserTextField
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleTextFieldChange}
            error={errors.password && true}
            helperText={errors.password}
          />
          <WiserButton text="Sign In" loading={auth.loading} />
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
