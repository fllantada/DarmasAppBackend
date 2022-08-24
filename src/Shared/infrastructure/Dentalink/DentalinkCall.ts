import axios from 'axios';

export class DentalinkCaller {
  private customAxios = axios.create({
    headers: { Authorization: 'Token ' + process.env.TOKEN_DENTALINK }
  });
  private allData: Array<any> = [];
  constructor() {
    this.allData = [];
  }

  async send(url: string): Promise<any> {
    let response: dentalinkResponse = {
      data: [],
      links: { next: url }
    };
    do {
      response = await this.getDentalink(response.links.next);
      this.addToData(response.data);
    } while (this.isValidUrl(response.links.next));

    return this.allData;
  }
  async createDentalinkUrl(url: string, filter: {}): Promise<string> {
    const baseUrl = `https://api.dentalink.healthatom.com/api/v1${url}`;
    const sendString = `?q=${JSON.stringify(filter)}`;
    const finalUrl = baseUrl + sendString;
    return finalUrl;
  }

  private async getDentalink(url: string): Promise<dentalinkResponse> {
    const { data } = await this.customAxios.get(url);

    return { data: data.data, links: data.links };
  }
  private addToData(newData: Array<any>) {
    this.allData = [...this.allData, ...newData];
  }
  private isValidUrl(url: string | undefined): boolean {
    if (typeof url !== 'string') {
      return false;
    }
    if (url.includes('https://api.dentalink.healthatom.com/api/v1')) {
      return true;
    } else {
      return false;
    }
  }
}

interface dentalinkResponse {
  links: { next: string };
  data: Array<any>;
}
