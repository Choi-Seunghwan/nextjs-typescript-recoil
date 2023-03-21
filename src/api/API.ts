import { AUTH_TOKEN, TIME_OUT } from 'src/constants/common';

export class API {
  API_URL: string = <string>process.env.NEXT_PUBLIC_API_URL;
  config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: '',
    },
  };

  constructor() {}

  getFetchParams(path = '', queries = {}, method = 'GET', data = null) {
    try {
      const url = new URL(path, this.API_URL);
      const searchParams = new URLSearchParams(queries).toString();
      url.search = searchParams;

      const config = JSON.parse(JSON.stringify(this.config));
      const token = localStorage?.getItem(AUTH_TOKEN);
      config.headers['Authorization'] = `Bearer ${token}`;

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
      const fetchParams = this.getFetchParams(path, queries, 'GET');
      const res: Response = await fetch(fetchParams.url, fetchParams.config);

      if (!res.ok) throw this.makeHttpError();

      return res.json();
    } catch (e) {
      throw e;
    }
  }

  async post(path = '', queries: any = {}, data: any = null) {
    try {
      const fetchParams = this.getFetchParams(path, queries, 'POST', data);
      console.log('@@', fetchParams);
      const res: Response = await fetch(fetchParams.url, fetchParams.config);

      if (!res.ok) throw this.makeHttpError();

      return res.json();
    } catch (e) {
      throw e;
    }
  }
}

export const api = new API();
