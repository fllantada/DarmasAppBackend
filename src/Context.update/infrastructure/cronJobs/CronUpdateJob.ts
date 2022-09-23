import { CronJob } from 'cron';
import { Task } from 'src/Context.update/domain/valueobjects/Task';

export class CronUpdateJob {
  cronJob: CronJob;
  name: string;

  constructor(task: Task) {
    console.log('Inicie constructor de cron job!!!');
    console.log(task);
    const interval = this.getStringInterval(task.interval);
    this.cronJob = new CronJob(interval, task.action);
    this.name = task.name;

    // Start job
  }
  nextTime() {
    return this.cronJob.nextDates();
  }
  start() {
    this.cronJob.start();
  }
  stop() {
    this.cronJob.stop();
  }
  getStringInterval(interval: string) {
    console.log('Ingrese a stringInterval con interval en:', interval);
    switch (interval) {
      case 'Diario':
        return '0 0 0 * * *';
      case 'Semanal':
        return '0 0 0 * * 0';
      case 'Mensual':
        return '0 0 0 1 * *';
    }
    throw new Error('Intervalo no valido');
  }
  getName() {
    return this.name;
  }
}
