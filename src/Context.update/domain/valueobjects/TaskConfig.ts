export interface TaskConfig {
  Name: string;
  taskInterval: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}
