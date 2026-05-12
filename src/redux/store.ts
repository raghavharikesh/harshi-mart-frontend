import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./features/auth-slice";

import cartReducer from "./features/cart-slice";

import { loadState } from "./load-state";

import { saveState } from "./save-state";

const persistedState =
  typeof window !== "undefined"
    ? loadState()
    : undefined;

export const store = configureStore({
  reducer: {
    auth: authReducer,

    cart: cartReducer,
  },

  preloadedState: {
    cart: persistedState,
  },
});

store.subscribe(() => {
  saveState(store.getState().cart);
});

export type RootState = ReturnType<
  typeof store.getState
>;

export type AppDispatch =
  typeof store.dispatch;