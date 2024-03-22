import { LoadingButton } from "@mui/lab";
import { Box, Button, Stack, TextField } from "@mui/material";
import React from "react";

const SigninForm = () => {
  return (
    <div>
      <Box component="form">
        <Stack spacing={3}>
          <TextField
            type="text"
            placeholder="username"
            name="username"
            fullWidth
            color="success"
          />
          <TextField
            type="password"
            placeholder="password"
            name="password"
            fullWidth
            color="success"
          />
        </Stack>

        <LoadingButton
          type="submit"
          fullWidth
          size="large"
          variant="contained"
          sx={{ marginTop: 4 }}
        >
          sign in
        </LoadingButton>

        <Button fullWidth sx={{ marginTop: 1 }}>
          sign up
        </Button>
      </Box>
    </div>
  );
};

export default SigninForm;
