import { TIME_OUT } from 'src/constants/common';

class API {
  BASE_URL: string = <string>process.env.NEXT_PUBLIC_BASE_URL;
  config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  constructor() {}

  getPetchParams(path = '', queries = {}, method = 'GET', data = null) {
    try {
      const url = new URL(path, this.BASE_URL);
      const searchParams = new URLSearchParams(queries).toString();
      url.search = searchParams;

      const config = { ...this.config };

      if (data) config.body = JSON.stringify(data);

      const controller = new AbortController();
      config.method = method;
      config.signal = controller.signal;

      setTimeout(() => controller.abort(), TIME_OUT);
      return { url, config };
    } catch (e) {
      throw e;
    }
  }

  makeHttpError() {}

  async get(path = '', queries = {}) {
    try {
      const petchParams = this.getPetchParams(path, queries, 'GET');
      const res: Response = await fetch(petchParams.url, petchParams.config);

      if (!res.ok) throw this.makeHttpError();

      return res.json();
    } catch (e) {
      throw e;
    }
  }

  async post(path = '', queries = {}, data = null) {
    try {
      const petchParams = this.getPetchParams(path, queries, 'POST', data);
      const res: Response = await fetch(petchParams.url, petchParams.config);

      if (!res.ok) throw this.makeHttpError();

      return res.json();
    } catch (e) {
      throw e;
    }
  }
}

const api = new API();

export default api;
