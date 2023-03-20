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
