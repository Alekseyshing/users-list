import { GenericList } from "../../../GenericList/GenericList";
import { merge } from "../../../services/ts/merge";
import { generateId, generateRandomString } from "../../../utils/generateRandomIndex";
import { BtnExit } from "../../BtnExit/BtnExit"
import { UserCard } from "../UserCard/UserCard";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { usersSlice } from "../../../store/reducers/UsersSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { fetchUsers } from "../../../store/reducers/ActionsCreators";
import useToken from "../../../hooks/useToken";

export const UsersPage = () => {

  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector(state => state.userReducer)
  const { isLoggedSuccess } = usersSlice.actions;
  const navigate = useNavigate();
  const { token } = useToken()


  useEffect(() => {
    dispatch(fetchUsers(token));
  }, [])



  const handleExit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    localStorage.removeItem('token');
    dispatch(isLoggedSuccess(false));
    navigate('/login')
  }

  const genericUsers = users?.map((user) => {
    const USERS = [
      {
        element: [<UserCard key={generateRandomString()} id={user?.id} email={user?.email} first_name={user?.first_name} avatar={user?.avatar} last_name={user?.last_name} />],
        className: 'border rounded-[10px] p-[20px] pt-[36px] min-w-[305px] shadow-[0_1px_3.98px_0px_rgba(51,51,51,0.15)]',
      }
    ].map(generateId)

    const handleItemClick = () => { }

    return (
      <GenericList
        list={USERS.map(merge({ onClick: handleItemClick }))}
        key={generateRandomString()}
      />
    )
  })

  return (
    <div>
      <header className=" bg-[var(--main-color)] mb-[48px]">
        <div
          className="flex flex-col gap-[16px] max-w-[1440px] m-auto items-center text-center pt-[23px] 
        md:pt-[32px] pl-[20px] pr-[20px]  pb-[64px] transition-all ease-in-out duration-75 
        active:text-[var(--main-color)] mb-[32px] sm:mb-[48px]"
        >
          <button
            onClick={handleExit}
            className="outline-none rounded-[8px] focus:outline-none p-[11px] sm:px-[16px] 
            sm:py-[8px] sm:border-[#f8f8f8] ml-auto mr-[3px] active:bg-[var(--active-color)] 
            hover:bg-[var(--hover-color)] transition-all ease-in-out duration-75"
          >
            <span
              className="text-white text-[16px] leading-[22px] hidden sm:block display-none 
            transition-all ease-in-out duration-75 "
            >
              Выход
            </span>
            <BtnExit />
          </button>
          <h1 className="text-[36px] text-white leading-[23px] md:text-[64px] md:leading-[75px]">Наша команда</h1>
          <p
            className="text-[16px] text-white md:text-[20px] leading-[19px] max-w-[846px] md:leading-[23px]"
          >
            Это опытные специалисты, хорошо разбирающиеся во всех задачах,
            которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.
          </p>
        </div>
      </header>
      <main className="px-[80px] max-w-[1440px] m-auto">
        {isLoading && <h1>Идет загрузка</h1>}
        {error && <h1>{error}</h1>}
        <ul className="flex gap-[20px] flex-wrap mb-[65px] items-center justify-center">
          {genericUsers}
        </ul>
      </main>
    </div>
  )
}
