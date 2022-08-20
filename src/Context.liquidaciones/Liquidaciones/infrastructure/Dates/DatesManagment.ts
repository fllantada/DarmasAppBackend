import moment from 'moment';

export class Dates {
  lunesEstaSemana(): string {
    console.log('Entre en lunes de esta semana');
    return moment().isoWeekday('Monday').format('YYYY-MM-DD');
  }
  lunesSemanaAnterior(): string {
    return moment().isoWeekday('Monday').subtract(1, 'week').format('YYYY-MM-DD');
  }
}
