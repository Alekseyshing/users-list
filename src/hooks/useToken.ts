import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    let userToken
    const tokenString = localStorage.getItem('token');
    if (tokenString !== null) {
      userToken = JSON.parse(tokenString);
    }
    return userToken
  };

  const [myToken, setToken] = useState(getToken());


  return {
    myToken
  }
}