import { Task } from 'src/Context.update/domain/valueobjects/Task';
import glob from 'glob';
import { CronUpdateJob } from '../../Context.update/infrastructure/cronJobs/CronUpdateJob';

export class TaskManager {
  private tasks: Array<Task> = [];

  async startTasks(): Promise<string> {
    new CronUpdateJob();

    /*  for (const task of this.tasks) {
      if (task.status === 'on') {
        console.log('Se inicio la task: ' + task.name);

        const response = await task.action();
        console.log(response);
      }
    } */
    return 'task started';
  }

  stopTask(task: Task): string {
    this.tasks = this.tasks.filter(taskItem => taskItem.name !== task.name);
    return 'task stopped';
  }

  listTasks(): Array<Task> {
    return this.tasks;
  }
  findTasks(): Array<Task> {
    const taskFiles: string[] = glob.sync(`${__dirname}/Tasks/**/*.task.{ts,js}`);
    for (const taskFile of taskFiles) {
      const task: { default: Task } = require(taskFile);
      this.tasks.push(task.default);
    }
    return this.tasks;
  }
}
