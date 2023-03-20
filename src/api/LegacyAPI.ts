import { API } from './API';

export class LegacyAPI extends API {
  config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      'X-User-Agent': 'mrtimemaker-mobile',
    },
  };

  constructor() {
    super();

    this.API_URL = <string>process.env.NEXT_PUBLIC_LEGACY_API_URL;
  }
}

export const legacyApi = new LegacyAPI();
