import { TaskConfig } from './TaskConfig';

export interface Task {
  action: () => void;
  config: TaskConfig;
  status: 'on' | 'off';
}
