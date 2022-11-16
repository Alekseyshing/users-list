import { MutableRefObject, useRef, useState } from "react";
import { useStore } from "effector-react";
import { AuthUser } from "../../../api/authUser";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { usersSlice } from "../../../store/reducers/UsersSlice";
import { handleAlertMessage } from "../../../utils/Auth";
import { Spinner } from "../../Spinner/Spinner";
import { validationLoginInputs } from "../../../utils/validationLogin";
import { $alert } from "../../../Context/alert";
import { Alert } from "../../Alert/Alert";


export const LoginPage = () => {
  const userEmailLoginRef = useRef() as MutableRefObject<HTMLInputElement>;
  const passwordLoginRef = useRef() as MutableRefObject<HTMLInputElement>;
  const navigate = useNavigate();
  const [spinner, setSpinner] = useState(false);
  const { isLogged } = useAppSelector(state => state.usersReducer)
  const { isLoggedSuccess } = usersSlice.actions;
  const dispatch = useAppDispatch();
  const alert = useStore($alert);

  const handleAuth = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleLogin(userEmailLoginRef.current.value, passwordLoginRef.current.value);
  }

  const handleLoginResponse = (
    result: boolean | undefined,
    navigatePath: string,
    alertText: string
  ) => {
    if (!result) {
      setSpinner(false);
      handleAlertMessage({ alertText: 'Введены неверные данные', alertStatus: 'warning' });
      return;
    }

    setSpinner(false);
    navigate(navigatePath);
    handleAlertMessage({ alertText, alertStatus: 'success' });
  }

  const handleLogin = async (email: string, password: string) => {

    if (!validationLoginInputs(userEmailLoginRef, passwordLoginRef)) {
      return
    }

    if (password !== 'cityslicka') {
      setSpinner(false);
      handleAlertMessage({ alertText: 'Введен неверный пароль', alertStatus: 'warning' });
      return;
    }

    if (!email || !password) {
      setSpinner(false);
      handleAlertMessage({ alertText: 'Заполните все поля', alertStatus: 'warning' });
      return;
    }

    if (password.length < 4) {
      setSpinner(false);
      handleAlertMessage({ alertText: 'Пароль должен содержать более 4-х символов', alertStatus: 'warning' });
      return;
    }

    const result = await AuthUser.login(email, password);
    setSpinner(true);
    dispatch(isLoggedSuccess(!isLogged));
    handleLoginResponse(result, '/users', 'Вход выполнен')
  }

  return (
    <div className="flex flex-col fixed top-0 left-0 w-full h-full">
      {alert.alertText && <Alert props={alert} />}
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

          <button className="w-full sm:min-h-[48px] flex items-center justify-center relative bg-[var(--main-color)] text-white text-base py-[13px] rounded-[8px] transition-all ease-in-out duration-75 active:bg-[#700fee] hover:bg-[#8025f7]">
            {spinner ? <Spinner top={10} left={50} /> : 'Войти'}
          </button>
        </form>
      </div>
    </div>
  )
}


