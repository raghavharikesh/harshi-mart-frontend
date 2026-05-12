export const saveState = (state: unknown) => {
  try {
    const serializedState =
      JSON.stringify(state);

    localStorage.setItem(
      "cartState",
      serializedState
    );
  } catch {}
};