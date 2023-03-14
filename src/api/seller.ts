import api from './API';

const PATH = 'admin/seller';

export const sellerEmailSearch = async (email: string) => {
  try {
    const result = await api.get(`${PATH}/search-email`, { email });

    return result;
  } catch (e) {
    throw e;
  }
};
