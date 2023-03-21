import { AccountInfo } from 'src/types/seller';
import { api } from './API';

const PATH = 'admin/seller';

export const sellerEmailSearch = async (email: string): Promise<User> => {
  try {
    const result = await api.get(`${PATH}/search-email`, { email });
    return result;
  } catch (e) {
    throw e;
  }
};

export const createSeller = async (email: string, marketName: string, accountInfo: AccountInfo) => {
  try {
    const result = await api.post(`${PATH}/`, {}, { email, marketName, accountInfo });
    console.log('@@ result', result);
    return result;
  } catch (e) {
    throw e;
  }
};
