// src/redux/features/wishlist-slice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface WishlistState { items: number[]; }
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: { items: [] } as WishlistState,
  reducers: {
    toggleWishlist: (state, action: PayloadAction<number>) => {
      const idx = state.items.indexOf(action.payload);
      if (idx > -1) state.items.splice(idx, 1);
      else state.items.push(action.payload);
    },
  },
});
export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;