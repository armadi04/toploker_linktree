import { createSlice } from "@reduxjs/toolkit";

interface MenuState {
  menuOpen: boolean;
}

const initialState: MenuState = {
  menuOpen: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu: (state: MenuState) => {
      state.menuOpen = !state.menuOpen;
    },
    closeMenu: (state: MenuState) => {
      state.menuOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = menuSlice.actions;
export default menuSlice.reducer;
