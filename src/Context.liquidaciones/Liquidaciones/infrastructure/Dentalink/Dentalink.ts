import axios from 'axios';

export class Dentalink {
  private axios = axios.create({
    headers: { Authorization: 'Token ' + process.env.TOKEN_DENTALINK }
  });
  constructor(filter: object) {
    console.log('Inicie la class Dentalink');
    console.log(filter);
  }

  url(): string {
    return 'url';
  }
  async data(): Promise<void> {
    const urlDentalink: string = this.url();
    console.log('EndPoint:', urlDentalink);
    const { data } = await this.axios.get(urlDentalink);
    return data;
  }
}
