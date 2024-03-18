import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import Container from "../../components/Container/Container";
import DefaultAvatar from "./../DefaultAvatar/DefaultAvatar";

const ReviewItem = () => {
  return (
    <Box
      sx={{
        padding: 2,
        borderRadius: "5px",
        position: "relative",
        opacity: 1,
        "&:hover": { backgroundColor: "background.paper" },
      }}
    >
      <Stack direction="row" spacing={2}>
        {/* avatar */}
        <DefaultAvatar />
        {/* avatar */}
        <Stack spacing={2} flexGrow={1}>
          <Stack spacing={1}>
            <Typography variant="h6" fontWeight="700">
              hhhhhhhh
            </Typography>
            <Typography variant="caption">2024</Typography>
          </Stack>
          <Typography variant="body1" textAlign="justify">
            good
          </Typography>
          <LoadingButton
            variant="contained"
            startIcon={<DeleteIcon />}
            loadingPosition="start"
            sx={{
              position: { xs: "relative", md: "absolute" },
              right: { xs: 0, md: "10px" },
              marginTop: { xs: 2, md: 0 },
              width: "max-content",
            }}
          >
            remove
          </LoadingButton>
        </Stack>
      </Stack>
    </Box>
  );
};

const MovieReview = () => {
  return (
    <>
      <Container>
        <Stack spacing={4} marginBottom={2}>
          <Box>
            <ReviewItem />
            <Divider
              sx={{
                display: { xs: "block", md: "none" },
              }}
            />
          </Box>
          <Button>load more</Button>
        </Stack>
        <>
          <Divider />
          <Stack direction="row" spacing={2}>
            <DefaultAvatar />
            <Stack spacing={2} flexGrow={1}>
              <Typography variant="h6" fontWeight="700">
                Hhhhhh
              </Typography>
              <TextField
                multiline
                rows={4}
                placeholder="Write your review"
                variant="outlined"
              />
              <LoadingButton
                variant="contained"
                size="large"
                sx={{ width: "max-content" }}
                startIcon={<SendOutlinedIcon />}
                loadingPosition="start"
              >
                post
              </LoadingButton>
            </Stack>
          </Stack>
        </>
      </Container>
    </>
  );
};

export default MovieReview;
