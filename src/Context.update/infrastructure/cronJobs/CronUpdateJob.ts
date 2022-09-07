import { CronJob } from 'cron';

export class CronUpdateJob {
  cronJob: CronJob;

  constructor() {
    console.log('Inicie constructor de cron job!!!');
    this.cronJob = new CronJob('0 * * * * *', () => {
      console.log('Ejecutando accion');
    });
    this.cronJob.start();

    // Start job
  }
}
