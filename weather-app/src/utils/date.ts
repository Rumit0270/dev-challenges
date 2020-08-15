import moment from 'moment';

export const getFormattedDate = (
  dateString: string,
  inputFormat: string = 'YYYY-MM-DD',
  outputFormat: string = 'ddd. DD MMM'
) => {
  return moment(dateString, inputFormat).format(outputFormat);
};
