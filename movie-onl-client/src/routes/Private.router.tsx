import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthModalOpen } from "../redux/ModalOpen";
import { RootState } from "../redux/store";

interface PrivateRouterProps {
  children: React.ReactNode;
}
const PrivateRouter: React.FC<PrivateRouterProps> = ({ children }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(setAuthModalOpen(!user));
  }, [user, dispatch]);
  return <div>user ? children : null;</div>;
};

export default PrivateRouter;
