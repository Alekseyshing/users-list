import { IUser } from "../../models/IUser"
import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"

interface UsersState {
  users: IUser[];
  isLoading: boolean;
  error: string;
  isLogged: boolean;
}

const initialState: UsersState = {
  users: [],
  isLoading: false,
  error: '',
  isLogged: false,
}

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    isLoggedSuccess(state, action: PayloadAction<boolean>) {
      state.isLogged = !state.isLogged;
    },
    usersFetching(state) {
      state.isLoading = true;
    },
    usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
      state.isLoading = false;
      state.error = '';
      state.users = action.payload
    },
    usersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
})

export default usersSlice.reducer;