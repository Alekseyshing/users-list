import { AppDispatch } from "../store";
import axios from "axios"
import { userSlice } from "./UserSlice";


export const fetchUsers = (token: string) => async (dispatch: AppDispatch) => {
  try {
    if (token && token.length > 0 && token != "undefined") {
      dispatch(userSlice.actions.usersFetching())
      const response = await axios.get('https://reqres.in/api/users?per_page=12');
      dispatch(userSlice.actions.usersFetchingSuccess(response.data.data))
    }
  } catch (e) {
    if (e instanceof Error) {
      dispatch(userSlice.actions.usersFetchingError(e.message))
    }
  }
}