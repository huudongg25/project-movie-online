import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./UserSlice";
import { authModalSlice } from "./ModalOpen";
import { globalLoadingSlice } from "./Loading";
import AppState from "./AppState";

const rootReducer = combineReducers({
  user: userSlice.reducer,
  authModal: authModalSlice.reducer,
  globalLoading: globalLoadingSlice.reducer,
  appState: AppState,
});
export type RootState = ReturnType<typeof rootReducer>;
const store = configureStore({
  reducer: rootReducer,
});

export default store;
