import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import type { RootState } from "store";
import { User } from "types/User";

// Define a type for the slice state
interface UsersState {
  current: User | undefined;
}

// Define the initial state using that type
const initialState: UsersState = {
  current: undefined,
};

export const usersSlice = createSlice({
  name: "users",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { setCurrentUser } = usersSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCurrentUser = (state: RootState) => state.users.current;

export function useCurrentUser(): User {
  const user = useSelector(selectCurrentUser);

  if (!user) {
    throw new Error("Tried to use current user before user set in redux");
  }

  return user;
}

export default usersSlice.reducer;
