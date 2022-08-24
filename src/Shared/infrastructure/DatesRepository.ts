import moment from 'moment';
import { Dates } from './Dates/DatesManagment';

export class DatesRepository extends Dates {
  constructor() {
    super();
  }
  lunesEstaSemana(): string {
    return moment().isoWeekday('Monday').format('YYYY-MM-DD');
  }
  lunesSemanaAnterior(): string {
    return moment().isoWeekday('Monday').subtract(1, 'week').format('YYYY-MM-DD');
  }
}
