import { useState } from "react";
import { IUser } from "../../models/IUser";
import { generateRandomString } from "../../utils/generateRandomIndex";
import "./styles.css";

export const UserCard = ({ first_name, avatar, last_name }: IUser) => {
  const [like, setLike] = useState(false)

  return (
    <article key={generateRandomString()} className="flex flex-col gap-[16px] items-center justify-center ">
      <img src={avatar} alt="user-foto" className="rounded-[50%] min-h-[124px] max-w-[124px] object-cover" />
      <span>{first_name}&nbsp;{last_name}</span>
      <button
        onClick={() => setLike(!like)}
        className="p-[8px] bg-[#F8F8F8] rounded-[4px] outline-0 focus:outline-0 border-none ml-auto hover:bg-white active:bg-[#008080]"
      >
        <svg width="16" height="14" className={`${!like ? 'icon' : 'icon-violet'}`} viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.85 1C2.72375 1 1 2.72173 1 4.84548C1 8.69096 5.55 12.1869 8 13C10.45 12.1869 15 8.69096 15 4.84548C15 2.72173 13.2762 1 11.15 1C9.848 1 8.6965 1.64569 8 2.63398C7.64499 2.1289 7.17336 1.71669 6.62504 1.43226C6.07672 1.14784 5.46785 0.999565 4.85 1Z" />
        </svg>
      </button>
    </article>
  )
}