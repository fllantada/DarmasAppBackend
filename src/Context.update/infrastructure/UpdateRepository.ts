import { TaskManager } from '../../App/updateTasks/TaskManager';

export class UpdateRepository extends TaskManager {
  constructor() {
    super();
    console.log('en el constructor de update repository');
  }
}
