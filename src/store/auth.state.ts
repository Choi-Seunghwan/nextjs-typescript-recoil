import { atom, useRecoilState } from 'recoil';

type AuthState = {
  user: User | null;
  token: JwtToken | null;
};

export const authState = atom<AuthState>({
  key: 'authState',
  default: {
    user: null,
    token: null,
  },
});
