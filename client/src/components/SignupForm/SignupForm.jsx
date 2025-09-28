import { useState } from "react";
import authApi from "../../api/Api";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormControlLabel,
  Switch,
  Button,
  Typography,
} from "@mui/material";

function SignupForm() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    authApi
      .signup(form)
      .then((res) => {
        console.log("Signup is successful", res.data);
      })
      .catch((err) => {
        console.error({ error: err.message });
      });
  };
  console.log(form);
  return (
    <Box
      component="form"
      onSubmit={(e) => handleSubmit(e)}
      sx={{
        maxWidth: 400,
        mx: "auto",
        bgcolor: "background.paper",
        mt: 4,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Signup
      </Typography>
      <TextField
        name="username"
        label="username"
        margin="normal"
        variant="outlined"
        fullWidth
        value={form.username}
        onChange={(e) => handleChange(e)}
      />
      <TextField
        type="email"
        name="email"
        label="email"
        margin="normal"
        variant="outlined"
        fullWidth
        value={form.email}
        onChange={(e) => handleChange(e)}
      />
      <TextField
        type="password"
        name="password"
        label="password"
        margin="normal"
        variant="outlined"
        fullWidth
        value={form.password}
        onChange={(e) => handleChange(e)}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
      >
        Submit
      </Button>
    </Box>
  );
}

export default SignupForm;
