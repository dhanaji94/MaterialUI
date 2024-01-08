import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = () => {
  const [page, setPage] = useState({
    email: "",
    password: "",
  });
  const { email, password } = page;
  const changeHandler = (e) => {
    setPage({ ...page, [e.target.name]: [e.target.value] });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <form onSubmit={submitHandler}>
      <Box
        sx={{
          width: "100%",
          maxWidth: 300,
          background: "gray",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <Typography variant="h5" component="h2" color="primary">
          Login
        </Typography>
        <TextField
          required
          id="outlined-required"
          label="email"
          defaultValue=""
          name="email"
          value={email}
          onChange={changeHandler}
        />
        <TextField
          required
          id="outlined-required"
          label="password"
          defaultValue=""
          sx={{ margin: 1 }}
          name="password"
          value={password}
          onChange={changeHandler}
        />

        <Button variant="contained" Middle>
          Login
        </Button>
      </Box>
    </form>
  );
};

export default Login;
