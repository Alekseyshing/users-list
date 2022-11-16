export interface IUser {
  id: number;
  email: string;
  first_name: string;
  avatar: string;
  last_name: string;
  like?: boolean;
}