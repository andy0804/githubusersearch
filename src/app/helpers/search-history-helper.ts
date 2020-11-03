import * as moment from 'moment';

export const searchHistoryHelper = (text, data, isSuccess) => {
  const searchDate = moment(new Date()).format('DD-MMM-YYYY');
  console.log(data);
  if (isSuccess) {
    return {
      ...data,
      success: true,
      searchText: text,
      date: searchDate,
      isFavourite: false,
    };
  } else {
    return {
      success: false,
      searchText: text,
      date: searchDate,
      isFavourite: false,
    };
  }
};
