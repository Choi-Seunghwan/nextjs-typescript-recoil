import { TIME_OUT } from 'src/constants/common';

class API {
  BASE_URL: string = <string>process.env.NEXT_PUBLIC_BASE_URL;
  config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  constructor() {}

  async get(path = '', queries = {}) {
    try {
      const url = new URL(path, this.BASE_URL);
      const searchParams = new URLSearchParams(queries).toString();
      url.search = searchParams;

      const config = { ...this.config };
      const controller = new AbortController();
      config.method = 'GET';
      config.signal = controller.signal;
      setTimeout(() => controller.abort(), TIME_OUT);

      const res: Response = await fetch(url, config);

      if (!res.ok) throw new Error(`HTTP ERROR. [path]: ${path} [status]: ${res.status}`);

      return res.json();
    } catch (e) {
      throw e;
    }
  }
}

const api = new API();

export default api;
