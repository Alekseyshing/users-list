import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/redux";
import { usersSlice } from "../../../store/reducers/UsersSlice";
import { BtnExit } from "../../BtnExit/BtnExit"

interface IUserInterface {
  email: string,
  first_name: string,
  last_name: string,
  avatar: string,
  text: string,
}

export const User = ({ email, first_name, last_name, text, avatar }: IUserInterface) => {
  const dispatch = useAppDispatch();
  const { isLoggedSuccess } = usersSlice.actions;
  const navigate = useNavigate();

  const handleExit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    localStorage.removeItem('token');
    dispatch(isLoggedSuccess(false));
    navigate('/login')
  }

  const handleBackBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/users');
  }

  return (
    <div>
      <header className=" bg-[var(--main-color)] mb-[48px]">
        <div
          className="flex max-w-[1440px] m-auto items-center justify-start px-[88px] py-[32px] 
        bg-[var(--main-color)]"
        >
          <button
            onClick={handleBackBtn}
            className="outline-none rounded-[8px] self-start focus:outline-none p-[11px] 
            sm:px-[16px] sm:py-[8px] sm:border-[#f8f8f8] mr-[29px] transition-all ease-in-out 
            duration-75 active:bg-[var(--active-color)] hover:bg-[var(--hover-color)]"
          >
            <span
              className="text-white text-[16px] leading-[22px] hidden sm:block 
            display-none transition-all ease-in-out duration-75 "
            >Назад</span>
            <BtnExit />
          </button>
          <img
            src={avatar}
            alt={'User avatar'}
            className="rounded-[50%] sm:w-[187px] sm:h-[187px] mr-[32px]"
          />
          <div className="flex flex-col gap-[16px]">
            <h1 className="text-white text-[64px] leading-[75px]">{first_name}&nbsp;{last_name}</h1>
            <p className=" text-white text-[32px] leading-[38px]">Партнер</p>
          </div>
          <button
            onClick={handleExit}
            className="outline-none rounded-[8px] focus:outline-none p-[11px] sm:px-[16px] 
            sm:py-[8px] sm:border-[#f8f8f8] ml-auto mr-[3px] self-start transition-all ease-in-out 
            duration-75 active:bg-[var(--active-color)] hover:bg-[var(--hover-color)]"
          >
            <span
              className="text-white text-[16px] leading-[22px] hidden sm:block display-none 
            transition-all ease-in-out duration-75 "
            >
              Выход
            </span>
            <BtnExit />
          </button>
        </div>
      </header>
    </div>
  )
}

