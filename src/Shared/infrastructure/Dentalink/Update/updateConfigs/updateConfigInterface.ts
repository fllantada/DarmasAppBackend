export interface UpdateConfig {
  config: {
    url: string;
    filters: {};
  };
  maper(data: Array<any>): Array<any>;
}
