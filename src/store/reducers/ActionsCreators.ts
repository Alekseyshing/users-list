import { AppDispatch } from "../store";
import { getUsers, getUser } from "../../api/api";
import { usersSlice } from "./UsersSlice";
import { userSlice } from "./UserSlice";
import { IUser } from "../../models/IUser";

export const fetchUsers = (token: string) => async (dispatch: AppDispatch) => {
  try {
    if (token && token.length > 0 && token !== "undefined") {
      dispatch(usersSlice.actions.usersFetching());
      const users = await getUsers();
      
      // Добавляем поле like для каждого пользователя
      const usersWithLike = users.map((user: IUser) => ({
        ...user,
        like: false
      }));
      
      dispatch(usersSlice.actions.usersFetchingSuccess(usersWithLike));
    }
  } catch (e) {
    if (e instanceof Error) {
      dispatch(usersSlice.actions.usersFetchingError(e.message));
    }
  }
}

export const fetchUser = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(usersSlice.actions.usersFetching());
    const user = await getUser(id);
    dispatch(userSlice.actions.userFetchingSuccess(user));
  } catch (e) {
    if (e instanceof Error) {
      dispatch(usersSlice.actions.usersFetchingError(e.message));
    }
  }
}


