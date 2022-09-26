import { Task } from 'src/Context.update/domain/valueobjects/Task';
import glob from 'glob';
import { CronUpdateJob } from '../../infrastructure/cronJobs/CronUpdateJob';

export class TaskManager {
  private tasks: Task[] = [];
  private jobs: CronUpdateJob[] = [];
  constructor() {
    this.findTasks();
  }

  async startTasks(): Promise<string> {
    for (const task of this.tasks) {
      if (task.status === 'on') {
        const job = new CronUpdateJob(task);
        this.jobs.push(job);
        job.start();
      }
    }
    return 'task started2';
  }

  findTasks(): Array<Task> {
    const taskFiles: string[] = glob.sync(`${__dirname}/Tasks/**/*.task.{ts,js}`);
    for (const taskFile of taskFiles) {
      const task: { default: Task } = require(taskFile);
      this.tasks.push(task.default);
    }
    return this.tasks;
  }

  getInfo(): Array<string> {
    const info: Array<string> = [];

    this.jobs.forEach(job => {
      info.push(job.getName(), job.nextTime().toString());
    });

    return info;
  }
}
