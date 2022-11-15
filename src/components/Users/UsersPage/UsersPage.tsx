import { GenericList } from "../../../GenericList/GenericList";
import { useMediaQuery } from 'react-responsive'
import { merge } from "../../../services/ts/merge";
import { generateId, generateRandomString } from "../../../utils/generateRandomIndex";
import { BtnExit } from "../../Buttons/BtnExit/BtnExit"
import { UserCard } from "../UserCard/UserCard";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { usersSlice } from "../../../store/reducers/UsersSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchUsers } from "../../../store/reducers/ActionsCreators";
import useToken from "../../../hooks/useToken";
import './styles.css'

export const UsersPage = () => {

  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector(state => state.userReducer)
  const { isLoggedSuccess } = usersSlice.actions;
  const navigate = useNavigate();
  const { token } = useToken();
  const [showMore, setShowMore] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 630px)' })

  useEffect(() => {
    dispatch(fetchUsers(token));
  }, [])

  const numberOfUsers = showMore ? users.length : 8;
  const numberOfUsersMobile = showMore ? users.length : 4;

  const handleShowMore = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowMore(true);
  }

  const handleExit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    localStorage.removeItem('token');
    dispatch(isLoggedSuccess(false));
    navigate('/login')
  }

  const genericUsers = users?.slice(0, !isMobile ? numberOfUsers : numberOfUsersMobile).map((user) => {
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
    <div className="mb-[69px]">
      <header className=" bg-[var(--main-color)] mb-[48px]">
        <div
          className="flex flex-col gap-[16px] max-w-[1480px] m-auto items-center text-center pt-[23px] 
        md:pt-[32px] px-[20px] pb-[64px] transition-all ease-in-out duration-75 
        active:text-[var(--main-color)] mb-[32px] sm:mb-[48px]"
        >
          <button
            onClick={handleExit}
            className="outline-none rounded-[8px] focus:outline-none sm:px-[16px] 
            sm:py-[8px] sm:border-[var(--border-color)] ml-auto mr-[3px] active:bg-[var(--active-color)] 
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
      <main className="max-w-[1440px] m-auto">
        {isLoading && <h1>Идет загрузка</h1>}
        {error && <h1>{error}</h1>}
        <ul className="flex gap-[20px] flex-wrap mb-[65px] items-center justify-center">
          {genericUsers}
        </ul>
      </main>
      <button
        onClick={handleShowMore}
        className='flex items-center border border-[#151317] rounded-[8px] 
        gap-[11px] m-auto px-[16px] py-[9px] hover:bg-[var(--hover-color)] hover:text-white 
        transition-all .3s ease-in-out'
      >
        <span>Показать еще</span>
        <svg className="arrow-svg" width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.497 0.989027L8.99999 8.29703L1.50299 0.989027C1.36905 0.858193 1.18923 0.784947 1.00199 0.784947C0.814751 0.784947 0.634939 0.858193 0.500992 0.989027C0.436135 1.05257 0.384611 1.12842 0.349436 1.21213C0.314261 1.29584 0.296143 1.38573 0.296143 1.47653C0.296143 1.56733 0.314261 1.65721 0.349436 1.74092C0.384611 1.82463 0.436135 1.90048 0.500992 1.96403L8.47649 9.74003C8.61655 9.87655 8.8044 9.95295 8.99999 9.95295C9.19558 9.95295 9.38343 9.87655 9.52349 9.74003L17.499 1.96553C17.5643 1.90193 17.6162 1.8259 17.6517 1.74191C17.6871 1.65792 17.7054 1.56769 17.7054 1.47653C17.7054 1.38537 17.6871 1.29513 17.6517 1.21114C17.6162 1.12715 17.5643 1.05112 17.499 0.987526C17.365 0.856693 17.1852 0.783447 16.998 0.783447C16.8108 0.783447 16.6309 0.856693 16.497 0.987526V0.989027Z" />
        </svg>
      </button>
    </div >
  )
}
