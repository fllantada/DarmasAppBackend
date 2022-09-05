import { Task } from './Task';
import { TaskConfig } from './TaskConfig';

export interface TaskManager {
  startTask(task: Task): string;
  stopTask(config: Task): string;
  listTasks(): Array<TaskConfig>;
}
