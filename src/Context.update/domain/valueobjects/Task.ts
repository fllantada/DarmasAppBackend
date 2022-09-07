export interface Task {
  name: string;
  action: (arg0?: any) => {};
  interval: 'Diario' | 'Semanal' | 'Mensual';
  status: 'on' | 'off';
}
