import { Box, Modal } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthModalOpen } from "../../redux/ModalOpen";
import SigninForm from "../SigninForm/SigninForm";
import SignupForm from "../Signup/SignupForm";
import Logo from "../Logo/Logo";
import { RootState } from "../../redux/store";

interface AuthModalProps {}

const actionState = {
  signin: "signin",
  signup: "signup",
};

const AuthModal: React.FC<AuthModalProps> = () => {
  const { authModalOpen } = useSelector((state: RootState) => state.authModal);

  const dispatch = useDispatch();

  const [action, setAction] = useState<string>(actionState.signin);

  useEffect(() => {
    if (authModalOpen) setAction(actionState.signin);
  }, [authModalOpen]);

  const handleClose = () => dispatch(setAuthModalOpen(false));

  const switchAuthState = (state: string) => setAction(state);

  return (
    <Modal open={authModalOpen} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          maxWidth: "600px",
          padding: 4,
          outline: "none",
        }}
      >
        <Box
          sx={{
            padding: 4,
            boxShadow: 24,
            backgroundColor: "background.paper",
          }}
        >
          <Box sx={{ textAlign: "center", marginBottom: "2rem" }}>
            <Logo />
          </Box>

          {action === actionState.signin && <SigninForm />}

          {action === actionState.signup && <SignupForm />}
        </Box>
      </Box>
    </Modal>
  );
};

export default AuthModal;
