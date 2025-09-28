import { useState } from "react";
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
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  console.log(form);
  return (
    <Box
      component="form"
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
        Login
      </Typography>
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
