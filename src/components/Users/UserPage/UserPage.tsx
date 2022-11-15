import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { fetchUser } from "../../../store/reducers/ActionsCreators";
import { User } from "../User/User";


export const UserPage = () => {
  const { user } = useAppSelector(state => state.newReducer)
  const dispatch = useAppDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchUser(`${params.userId}`));
  }, [])

  const avatar = user?.data?.avatar;
  const email = user?.data?.email;
  const first_name = user?.data?.first_name;
  const last_name = user?.data?.last_name;
  const text = user?.support?.text;


  return (
    <div>
      <User email={email} first_name={first_name} avatar={avatar} last_name={last_name} text={text} />
    </div>
  )
}