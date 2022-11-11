import { MutableRefObject, useRef } from "react"
import { AuthUser } from "../../../api/authUser";
import { Link, useNavigate } from "react-router-dom";


export const RegistrationPage = () => {

  const userNameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const userEmailRef = useRef() as MutableRefObject<HTMLInputElement>;
  const passwordRef = useRef() as MutableRefObject<HTMLInputElement>;
  const passwordConfirmRef = useRef() as MutableRefObject<HTMLInputElement>;
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleRegistration(userNameRef.current.value, userEmailRef.current.value, passwordRef.current.value)
  }

  const handleRegistration = async (username: string, email: string, password: string) => {
    if (!username || !password) {
      // setSpinner(false);
      // handleAlertMessage({ alertText: 'Заполните все поля', alertStatus: 'warning' });
      return;
    }

    if (password.length < 4) {
      // setSpinner(false);
      // handleAlertMessage({ alertText: 'Пароль должен содержать более 4-х символов', alertStatus: 'warning' });
      return;
    }

    const result = await AuthUser.registration(username, email, password);
    console.log(result);
    navigate('/login')

    // handleAuthResponse(result, '/login', 'Регистрация выполнена')
  }

  return (
    <div className="flex flex-col fixed top-0 left-0 w-full h-full">
      <div className="flex flex-col gap-[16px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] p-[16px] w-[375px] md:w-[500px] rounded-[16px] shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)]">
        <h2 className="text-xl">Регистрация</h2>
        <form
          className="flex flex-col items-center gap-[16px]"
          onSubmit={handleSubmit}>
          <label className="flex flex-col items-left gap-[8px] w-full">
            <span className="text-base">Имя</span>
            <input ref={userNameRef} type="text" className="p-[16px] bg-[#f8f8f8] rounded-lg" placeholder="Артур" />
          </label>

          <label className="flex flex-col items-left gap-[8px]  w-full">
            <span className="text-base">Электронная почта</span>
            <input ref={userEmailRef} type="text" className="p-[16px] bg-[#f8f8f8] rounded-lg" placeholder="example@mail.ru" />
          </label>

          <label className="flex flex-col items-left gap-[8px] w-full">
            <span className="text-base">Пароль</span>
            <input ref={passwordRef} type="password" className="p-[16px] bg-[#f8f8f8] rounded-lg" placeholder="******" />
          </label>

          <label className="flex flex-col items-left gap-[8px] w-full">
            <span className="text-base">Подтвердите пароль</span>
            <input ref={passwordConfirmRef} type="password" className="p-[16px] bg-[#f8f8f8] rounded-lg" placeholder="******" />
          </label>

          <button className="w-full bg-[#512689] text-white text-base py-[13px] rounded-[8px]">
            {/* {spinner ? <Spinner top={5} left={20} /> : currentAuthTitle} */}
            Зарегистрироваться
          </button>
        </form>
        <div>
          <span className="">Уже есть аккаунт? </span>
          <Link to={'/login'}>Войти</Link>
        </div>
      </div>
    </div>
  )
}