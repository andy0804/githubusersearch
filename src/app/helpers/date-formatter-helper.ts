import * as moment from 'moment';

export const dateFormatterHelper = (date, format = 'DD-MMM-YYYY') => {
  return moment(date).format(format);
};
