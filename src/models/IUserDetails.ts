export interface IUserDetails {
  data: {
    id: number;
    email: string;
    first_name: string;
    avatar: string;
    last_name: string;
  },
  support: {
    url: string,
    text: string
  }
}