import { TaskManager } from './updateTasks/TaskManager';
export class UpdateApp {
  async start() {
    const taskManager = new TaskManager();
    taskManager.findTasks();
    await taskManager.startTasks();
  }
}
