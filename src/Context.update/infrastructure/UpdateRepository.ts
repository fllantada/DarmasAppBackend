import { TaskManager } from './task/TaskManager';

export class UpdateRepository extends TaskManager {
  constructor() {
    super();
    console.log('en el constructor de update repository');
  }
}
