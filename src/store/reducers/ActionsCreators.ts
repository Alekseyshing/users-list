import { AppDispatch } from "../store";
import axios from "axios"
import { usersSlice } from "./UsersSlice";
import { userSlice } from "./UserSlice";
import { IUser } from "../../models/IUser";

export const fetchUsers = (token: string) => async (dispatch: AppDispatch) => {
  try {
    if (token && token.length > 0 && token != "undefined") {
      dispatch(usersSlice.actions.usersFetching())
      const response = await axios.get('https://reqres.in/api/users?per_page=12');

      if (localStorage.getItem('users')) {
        const users = JSON.parse(localStorage.getItem("users") as string);
        localStorage.setItem('users', JSON.stringify(users));
        dispatch(usersSlice.actions.usersFetchingSuccess(users))
      } else {
        localStorage.setItem('users', JSON.stringify(response.data.data));
        let users2: IUser[] = JSON.parse(localStorage.getItem("users") as string);
        users2.forEach((item: IUser) => {
          item.like = false
        });
        localStorage.setItem('users', JSON.stringify(users2));
        dispatch(usersSlice.actions.usersFetchingSuccess(users2))
      }

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


