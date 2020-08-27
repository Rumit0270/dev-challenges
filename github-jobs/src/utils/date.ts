import { formatDistance } from 'date-fns';

export const getDistanceFromNow = (fromDate: Date) => {
  return formatDistance(fromDate, new Date(), { addSuffix: true });
};
