import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: any | null;
  listFavorites: any[];
}

const initialState: UserState = {
  user: null,
  listFavorites: [],
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any | null>) => {
      if (action.payload === null) {
        localStorage.removeItem("actkn");
      } else {
        if (action.payload.token)
          localStorage.setItem("actkn", action.payload.token);
      }

      state.user = action.payload;
    },
    setListFavorites: (state, action: PayloadAction<any[]>) => {
      state.listFavorites = action.payload;
    },
    removeFavorite: (state, action: PayloadAction<{ mediaId: string }>) => {
      const { mediaId } = action.payload;
      state.listFavorites = state.listFavorites.filter(
        (e) => e.mediaId.toString() !== mediaId.toString()
      );
    },
    addFavorite: (state, action: PayloadAction<any>) => {
      state.listFavorites = [action.payload, ...state.listFavorites];
    },
  },
});

export const { setUser, setListFavorites, addFavorite, removeFavorite } =
  userSlice.actions;

export default userSlice.reducer;
