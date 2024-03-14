import React from "react";
import { LoadingButton } from "@mui/lab";
import { Box, Stack, TextField } from "@mui/material";
import Container from "../../components/Container/Container";
const ChangePassword = () => {
  return (
    <>
      {" "}
      <Box>
        <Container>
          <Box component="form" maxWidth="400px">
            <Stack spacing={2}>
              <TextField
                type="password"
                placeholder="password"
                name="password"
                fullWidth
                color="success"
              />
              <TextField
                type="password"
                placeholder="new password"
                name="newPassword"
                fullWidth
                color="success"
              />
              <TextField
                type="password"
                placeholder="confirm new password"
                name="confirmNewPassword"
                fullWidth
                color="success"
              />

              <LoadingButton
                type="submit"
                variant="contained"
                fullWidth
                sx={{ marginTop: 4 }}
              >
                update password
              </LoadingButton>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ChangePassword;
