import { combineReducers, configureStore } from "@reduxjs/toolkit"
import userReducer from "./reducers/UsersSlice"
import newReducer from "./reducers/UserSlice"
const rootReducer = combineReducers({
  userReducer,
  newReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']