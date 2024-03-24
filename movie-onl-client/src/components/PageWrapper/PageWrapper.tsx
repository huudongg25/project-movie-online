import React, { useEffect } from "react";
import { PageWrapperProps } from "../../types/type";
import { useDispatch } from "react-redux";
import { setAppState } from "../../redux/AppState";

const PageWrapper: React.FC<PageWrapperProps> = ({ state, children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setAppState(state));
  }, [state, dispatch]);
  return <>{children}</>;
};

export default PageWrapper;
