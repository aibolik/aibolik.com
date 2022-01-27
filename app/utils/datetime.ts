import { format, parse } from 'date-fns';

const getFriendlyDate = (date?: string) => {
  if (!date) {
    throw Error('Date is not provided');
  }

  const parsedDate = parse(date, 'dd-MM-yyyy', new Date());

  return format(parsedDate, 'PPP');
}

export {
  getFriendlyDate,
};