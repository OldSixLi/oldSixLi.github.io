function formatNumber(n) {
  const str = n.toString();
  return str[1] ? str : `0${str}`;
}

export function formatTime(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const t1 = [year, month, day].map(formatNumber).join('/');
  const t2 = [hour, minute, second].map(formatNumber).join(':');

  return `${t1} ${t2}`;
}
/**
 * 时间转化为时间戳
 *
 * @param {*} timestr 时间格式
 * @returns 时间戳(精确到毫秒级)
 */
function toTimestamp(timestr) {
  return Date.parse(new Date(timestr)).toString() == "NaN" ? 0 : Date.parse(new Date(timestr));
}

/**
 * 时间戳转化为正常时间 
 * @param {any} shijianchuo  时间戳 精确到毫秒
 * @returns 正常时间
 */
function toNormalTime(shijianchuo) {
  var time = new Date(parseInt(shijianchuo));
  var y = time.getFullYear();
  var m = time.getMonth() + 1;
  var d = time.getDate();
  var h = time.getHours();
  var mm = time.getMinutes();
  var s = time.getSeconds();
  return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
}

function add0(m) { return m < 10 ? '0' + m : m; }

export default {
  formatNumber,
  formatTime,
  toTimestamp,
  toNormalTime
}