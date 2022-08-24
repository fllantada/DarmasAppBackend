import { updateConfig } from './updateConfigs/updateConfigInterface';
import { DentalinkCall } from '../DentalinkCall';

export class DentalinkUpdater extends DentalinkCall {
  private maper: Function;
  private url: string;
  private filters: {};

  constructor(elementConfig: updateConfig) {
    super();
    this.url = elementConfig.config.url;
    this.filters = elementConfig.config.filters;
    this.maper = elementConfig.maper;
  }
  public async update(): Promise<Array<any>> {
    //create url
    const urlDentalink = await this.createDentalinkUrl(this.url, this.filters);
    //get data
    const data = await this.send(urlDentalink);
    //map data
    const dataMaped = this.maper(data);
    //return data
    return dataMaped;
  }
}
