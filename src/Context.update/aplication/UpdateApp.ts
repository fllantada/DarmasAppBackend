import { TaskManager } from './updateTasks/TaskManager';
export class UpdateApp {
  async start() {
    const taskManager = new TaskManager();
    await taskManager.startTasks();
    console.log('Info:', taskManager.getInfo());
  }
}
