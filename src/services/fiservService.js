import moment from 'moment-timezone';

export function updateTime() {
  var timezone = 'Asia/Dubai';
  var txndatetime = moment().tz(timezone).format('YYYY:MM:DD-HH:mm:ss');
  return txndatetime;
}
