import { AppDispatch } from "../store";
import axios from "axios"
import { usersSlice } from "./UsersSlice";
import { userSlice } from "./UserSlice";

export const fetchUsers = (token: string) => async (dispatch: AppDispatch) => {
  try {
    if (token && token.length > 0 && token != "undefined") {
      dispatch(usersSlice.actions.usersFetching())
      const response = await axios.get('https://reqres.in/api/users?per_page=12');
      dispatch(usersSlice.actions.usersFetchingSuccess(response.data.data))
    }
  } catch (e) {
    if (e instanceof Error) {
      dispatch(usersSlice.actions.usersFetchingError(e.message))
    }
  }
}

export const fetchUser = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(usersSlice.actions.usersFetching())
    const response = await axios.get(`https://reqres.in/api/users/${id}`);

    dispatch(userSlice.actions.userFetchingSuccess(response.data))
  } catch (e) {
    if (e instanceof Error) {
      dispatch(usersSlice.actions.usersFetchingError(e.message))
    }
  }
}


