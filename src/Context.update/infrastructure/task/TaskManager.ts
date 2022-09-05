import { Task } from 'src/Context.update/domain/valueobjects/Task';

export class TaskManager {
  private tasks: Array<Task> = [];

  startTask(task: Task): string {
    this.tasks.push(task);

    task.action();
    return 'task started';
  }

  stopTask(task: Task): string {
    this.tasks = this.tasks.filter(taskItem => taskItem.config.Name !== task.config.Name);
    return 'task stopped';
  }

  listTasks(): Array<Task> {
    return this.tasks;
  }
}
