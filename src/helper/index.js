import moment from 'moment';

export const formatDate = (value, formatter = 'LL') => {
  return moment(value).format(formatter);
};

export const formatDateToCalendarTime = (value) => {
  return moment(value).calendar();
};
