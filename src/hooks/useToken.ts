export default function useToken() {
  let token
  const tokenString = localStorage.getItem('token');
  if (tokenString !== null) {
    token = JSON.parse(tokenString);
  }

  return token
}