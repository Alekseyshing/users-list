import { IUser } from "../../models/IUser"
import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
  isLogged: boolean;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
  isLogged: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    isLoggedSuccess(state, action: PayloadAction<boolean>) {
      state.isLogged = !state.isLogged
    }
  }
})

export default userSlice.reducer;