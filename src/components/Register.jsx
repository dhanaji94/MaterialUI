import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useState } from "react";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.password === data.confirmpassword) {
      console.log(data);
      alert("sucess");
    } else {
      alert("password must match");
    }
  };

  return (
    <form>
      <Box
        sx={{
          width: "100%",
          maxWidth: 500,
          background: "white",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <Typography variant="h5" component="h2" color="primary">
          Register
        </Typography>
        <TextField
          required
          id="outlined-required"
          label="name"
          defaultValue=""
          fullWidth
          sx={{ margin: 1 }}
          name="name"
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          label="email"
          defaultValue=""
          fullWidth
          sx={{ margin: 1 }}
          name="email"
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          type='password'
          label="password"
          defaultValue=""
          fullWidth
          sx={{ margin: 1 }}
          name="password"
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          label="confirmpassword"
          defaultValue=""
          fullWidth
          sx={{ margin: 1 }}
          name="confirmpassword"
          type='password'
          onChange={handleChange}
        />
        <Box sx={{ textAlign: "left" }}>
          <Checkbox {...label} />
          <Typography variant="p" color="black">
            Accept Terms and Conditions
          </Typography>
        </Box>

        <Button variant="contained" fullWidth onClick={handleSubmit}>
          Register
        </Button>
      </Box>
    </form>
  );
};

export default Register;
