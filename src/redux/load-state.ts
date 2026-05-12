export const loadState = () => {
  try {
    const serializedState =
      localStorage.getItem("cartState");

    if (!serializedState) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch {
    return undefined;
  }
};