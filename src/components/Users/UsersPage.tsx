import { GenericList } from "../../GenericList/GenericList";
import useToken from "../../hooks/useToken";
import { IUsersData, useUsersData } from "../../hooks/useUsersData";
import { merge } from "../../services/ts/merge";
import { generateId, generateRandomString } from "../../utils/generateRandomIndex";
import { BtnExit } from "../BtnExit/BtnExit"
import { UserCard } from "./UserCard";

export const UsersPage = () => {
  const token = useToken();
  const [users1] = useUsersData(token.myToken.token, 1);
  const [users2] = useUsersData(token.myToken.token, 2);
  const users = users1?.concat(users2 as IUsersData[]);

  const genericUsers = users?.map((user) => {
    const USERS = [
      {
        element: [<UserCard key={user?.id} id={user?.id} email={user?.email} first_name={user?.first_name} avatar={user?.avatar} last_name={user?.last_name} />],
        // className: `${'min-w-[160px] w-full gap-2 text-xl text-black'}`,
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
      <header className="flex flex-col gap-[16px] items-center text-center pt-[23px] md:pt-[32px] pl-[20px] pr-[20px]  pb-[64px] bg-[#512689] transition-all ease-in-out duration-75 active:text-[#512689] mb-[32px] sm:mb-[48px]">
        <button className="outline-none rounded-[8px] focus:outline-none p-[11px] sm:px-[16px] sm:py-[8px] sm:border-[#f8f8f8] ml-auto mr-[3px] bg-transparent  transition-all ease-in-out duration-75 active:bg-[#700fee] hover:bg-[#8025f7] outline-0">
          <span className="text-white text-[16px] leading-[22px] hidden sm:block display-none transition-all ease-in-out duration-75 ">Выход</span>
          <BtnExit />
        </button>
        <h1 className="text-[36px] text-white leading-[23px] md:text-[64px] md:leading-[75px]">Наша команда</h1>
        <p className="text-[16px] text-white md:text-[20px] leading-[19px] max-w-[846px] md:leading-[23px]">Это опытные специалисты, хорошо разбирающиеся во всех задачах,
          которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.
        </p>
      </header>
      <main className="px-[80px]">
        <ul className="flex gap-[20px] flex-wrap mb-[65px] items-center justify-center">
          {genericUsers}
        </ul>
      </main>
    </div>
  )
}