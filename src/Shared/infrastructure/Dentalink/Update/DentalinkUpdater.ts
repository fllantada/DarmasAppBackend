import { UpdateConfig } from './updateConfigs/updateConfigInterface';
import { DentalinkCaller } from '../DentalinkCall';

export class DentalinkUpdater extends DentalinkCaller {
  private maper: (data: any) => Array<any>;
  private url: string;
  private filters: {};

  constructor(elementConfig: UpdateConfig) {
    super();
    this.url = elementConfig.config.url;
    this.filters = elementConfig.config.filters;
    this.maper = elementConfig.maper;
  }
  public async update(): Promise<Array<any>> {
    // create url
    const urlDentalink = await this.createDentalinkUrl(this.url, this.filters);
    console.log('URL: ', urlDentalink);
    // get data
    const data = await this.send(urlDentalink);
    // map data
    const dataMaped = this.maper(data);
    // return data
    return dataMaped;
  }
}
