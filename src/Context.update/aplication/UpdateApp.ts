import { TaskManager } from './updateTasks/TaskManager';
export class UpdateApp {
  async start() {
    console.log('-----------> Iniciando aplicación<-------------');
    const taskManager = new TaskManager();
    await taskManager.startTasks();
    console.log('Info:', taskManager.getInfo());
  }
}
