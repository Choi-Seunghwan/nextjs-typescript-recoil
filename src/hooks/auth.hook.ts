import { useRecoilState } from 'recoil';
import { AUTH_TOKEN } from 'src/constants/common';
import { authState } from 'src/store/auth.state';

export const useAuth = () => {
  const [state, setAuthState] = useRecoilState(authState);

  const setAuth = ({ user, token }: { user: User; token: JwtToken }) => {
    localStorage.setItem(AUTH_TOKEN, token);
    if (!user || !token) return;
    setAuthState({ user, token });
  };

  const isSignIn = (): boolean => {
    const token = localStorage.getItem(AUTH_TOKEN);
    if (state.token && state.user && token) return true;
    else return false;
  };

  return { setAuth, isSignIn };
};
