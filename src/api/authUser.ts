import api from './axiosUser'

export class AuthUser {
  static async registration(username: string, email: string, password: string) {
    try {
      const result = await api.post('/api/users', { username, email, password });
      console.log(result);


      if (result.status === 201) {
        // setAuth(false);
        console.log('201');

        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
    }
  }

  static async login(email: string, password: string) {
    try {
      const result = await api.post('/api/login', { email, password });

      if (result.status === 200) {
        // setAuth(true);
        // setUsername(result.data.username)
        localStorage.setItem('auth', JSON.stringify(result.data));
        console.log(result.data);

        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
    }
  }
}