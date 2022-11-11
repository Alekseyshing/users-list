import axios from 'axios'
import { useEffect, useState } from 'react';

export interface IUsersData {
  id: number;
  email: string;
  first_name: string;
  avatar: string;
  last_name: string;
}

export function useUsersData(token: string, page: number) {
  const [users, setUsers] = useState<IUsersData[]>();

  useEffect(() => {
    try {
      if (token && token.length > 0 && token != "undefined") {
        axios.get(`https://reqres.in/api/users?page=${page}`, {
          headers: { Authorization: `bearer ${token}` }
        }).then((resp) => {
          const usersData = resp.data.data;
          const dataList: IUsersData[] = [];

          for (let i = 0; i < usersData.length; i++) {
            dataList.push({
              id: usersData[i]?.id,
              email: usersData[i].email,
              first_name: usersData[i].first_name,
              avatar: usersData[i].avatar,
              last_name: usersData[i].last_name
            });
          }

          if (usersData !== undefined) {
            setUsers(dataList);
          }
        })
      }
    } catch (error) {
      console.error(error)
    }
  }, [token])

  return [users];
}

