import React from "react";
import SignupForm from "../../components/SignupForm/SignupForm";
import { Box } from "@mui/material";

function AuthPage() {
  return (
    <Box sx={{height: "100vh"}}>
      <SignupForm />
    </Box>
  );
}

export default AuthPage;
