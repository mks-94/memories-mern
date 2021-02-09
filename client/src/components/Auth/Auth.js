import React from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import InputField from "./InputField";

import useStyles from "./styles";

const Auth = () => {
  const classes = useStyles();

  const isSignup = "false";

  const handleSubmit = () => {};

  const handleChange = () => {};

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography>{isSignup ? "Sign up" : "Sign in"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <InputField
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <InputField
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <InputField
              name="email"
              label="Email"
              handleChange={handleChange}
              type="email"
            />
            <InputField
              name="password"
              label="Password"
              handleChange={handleChange}
            />
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
