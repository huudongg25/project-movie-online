import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GlobalLoadingState {
  globalLoading: boolean;
}

const initialState: GlobalLoadingState = {
  globalLoading: false,
};

export const globalLoadingSlice = createSlice({
  name: "GlobalLoading",
  initialState,
  reducers: {
    setGlobalLoading: (state, action: PayloadAction<boolean>) => {
      state.globalLoading = action.payload;
    },
  },
});

export const { setGlobalLoading } = globalLoadingSlice.actions;

export default globalLoadingSlice.reducer;
