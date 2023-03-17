import { atom } from 'recoil';

type AuthState = {
  user: User | null;
};

export const authState = atom<AuthState>({
  key: 'authState',
  default: {
    user: null,
  },
});
