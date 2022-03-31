import moment from 'moment';

import { theme } from '../constants';

export function fullTitle (title) {
  return title.length > 27 ? `${title.slice(0, 24)}...` : title;
}

export function formatDate (date) {

  let newDate = new Date(date);

  return moment(newDate).fromNow();
  
}

export function changeColor( value, select ) {
  return value === select ? theme.COLORS.secondary : theme.COLORS.primary;
}

export function changeBackground( value, select ) {
  return value === select ? theme.COLORS.primary : theme.COLORS.secondary;
}