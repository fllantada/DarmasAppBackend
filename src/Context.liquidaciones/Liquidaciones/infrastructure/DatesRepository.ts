import moment from 'moment';

export class DatesRepository {
  lunesEstaSemana(): string {
    return moment().isoWeekday('Monday').format('YYYY-MM-DD');
  }
  lunesSemanaAnterior(): string {
    return moment().isoWeekday('Monday').subtract(1, 'week').format('YYYY-MM-DD');
  }
}
