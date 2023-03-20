import { legacyApi } from './LegacyAPI';

export const signIn = async (email: string, password: string): Promise<SignInResult> => {
  try {
    const result = await legacyApi.post('api/session', {}, { email, password, hidePassword: true });
    return result;
  } catch (e) {
    throw e;
  }
};
