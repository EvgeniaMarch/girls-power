import { User } from '../../types/users/User';

export const checkUser = (): Promise<User> =>
  fetch('/api/auth/checkUser', {
    method: 'GET',
    credentials: 'include',
  }).then((res) => res.json());
