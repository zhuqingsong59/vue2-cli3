/**
 * 涉及时间的相关操作
 */
import dayjs from 'dayjs'
class Dayjs {
  constructor() {
  }
  dateStr (val) {
    return dayjs(val).format('YYYYMMDDHHmmss')
  }
  addDay (value, addDay, format) {
    return dayjs(value).add(addDay, 'day').format(format || 'YYYY-MM-DD')
  }
  addMonth (value, addMonth, format) {
    return dayjs(value).add(addMonth, 'month').format(format || 'YYYY-MM')
  }
  formatDate (val) {
    return dayjs(val).format('YYYY-MM-DD')
  }
  formatMonth (val) {
    return dayjs(val).format('YYYY-MM')
  }
  formatYear (val) {
    return dayjs(val).format('YYYY')
  }
  formatDateHm (val) {
    return dayjs(val).format('YYYY-MM-DD HH:mm')
  }
  formatDateHms (val) {
    return dayjs(val).format('YYYY-MM-DD HH:mm:ss')
  }
  dateDiff (date1, date2) {
    return dayjs(date2).diff(dayjs(date1), 'day')
  }
}
export default new Dayjs()
