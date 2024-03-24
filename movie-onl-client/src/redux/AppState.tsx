import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppStateState {
  appState: string;
}

const initialState: AppStateState = {
  appState: "",
};

const appStateSlice = createSlice({
  name: "AppState",
  initialState,
  reducers: {
    setAppState: (state, action: PayloadAction<string>) => {
      state.appState = action.payload;
    },
  },
});

export const { setAppState } = appStateSlice.actions;

export default appStateSlice.reducer;
