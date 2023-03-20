import { AUTH_TOKEN, TIME_OUT } from 'src/constants/common';

export class API {
  API_URL: string = <string>process.env.NEXT_PUBLIC_API_URL;
  config: RequestInit = {
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: '',
    }),
  };

  constructor() {}

  getPetchParams(path = '', queries = {}, method = 'GET', data = null) {
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
      const petchParams = this.getPetchParams(path, queries, 'GET');
      const res: Response = await fetch(petchParams.url, petchParams.config);

      if (!res.ok) throw this.makeHttpError();

      return res.json();
    } catch (e) {
      throw e;
    }
  }

  async post(path = '', queries: any = {}, data: any = null) {
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

export const api = new API();
