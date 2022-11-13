import { MutableRefObject, useRef } from "react"
import { AuthUser } from "../../../api/authUser";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { userSlice } from "../../../store/reducers/UserSlice";


export const LoginPage = () => {
  const userEmailLoginRef = useRef() as MutableRefObject<HTMLInputElement>;
  const passwordLoginRef = useRef() as MutableRefObject<HTMLInputElement>;
  const navigate = useNavigate();

  const { isLogged } = useAppSelector(state => state.userReducer)
  const { isLoggedSuccess } = userSlice.actions;
  const dispatch = useAppDispatch();

  const handleAuth = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleLogin(userEmailLoginRef.current.value, passwordLoginRef.current.value);
  }

  const handleLogin = async (email: string, password: string) => {
    if (!email || !password) {
      // setSpinner(false);
      // handleAlertMessage({ alertText: 'Заполните все поля', alertStatus: 'warning' });
      return;
    }


    const result = await AuthUser.login(email, password);
    dispatch(isLoggedSuccess(!isLogged));
    navigate('/users')
    // handleAuthResponse(result, '/users', 'Вход выполнен')
  }

  return (
    <div className="flex flex-col fixed top-0 left-0 w-full h-full">
      <div className="flex flex-col gap-[16px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] p-[16px] w-[375px] md:w-[500px] rounded-[16px] shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)]">
        <h2 className="text-xl">Авторизация</h2>
        <form
          className="flex flex-col items-center gap-[16px]"
          onSubmit={handleAuth}>

          <label className="flex flex-col items-left gap-[8px]  w-full">
            <span className="text-base">Электронная почта</span>
            <input ref={userEmailLoginRef} type="text" className="p-[16px] bg-[#f8f8f8] rounded-lg" placeholder="example@mail.ru" />
          </label>

          <label className="flex flex-col items-left gap-[8px] w-full">
            <span className="text-base">Пароль</span>
            <input ref={passwordLoginRef} type="password" className="p-[16px] bg-[#f8f8f8] rounded-lg" placeholder="******" />
          </label>

          <button className="w-full bg-[#512689] text-white text-base py-[13px] rounded-[8px] transition-all ease-in-out duration-75 active:bg-[#700fee] hover:bg-[#8025f7]">
            {/* {spinner ? <Spinner top={5} left={20} /> : currentAuthTitle} */}
            Войти
          </button>
        </form>
      </div>
    </div>
  )
}