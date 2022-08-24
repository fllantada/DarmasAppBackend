import moment from 'moment';

export class Dates {
  lunesEstaSemana(): string {
    return moment().isoWeekday('Monday').format('YYYY-MM-DD');
  }
  lunesSemanaAnterior(): string {
    return moment().isoWeekday('Monday').subtract(1, 'week').format('YYYY-MM-DD');
  }
  haceDosMeses(): string {
    return moment().subtract(2, 'month').format('YYYY-MM-DD');
  }
  haceUnMes(): string {
    return moment().subtract(1, 'month').format('YYYY-MM-DD');
  }
}
