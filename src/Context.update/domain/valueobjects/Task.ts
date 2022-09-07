export interface Task {
  name: string;
  action: (arg0?: any) => {};
  interval: {};
  status: 'on' | 'off';
}
