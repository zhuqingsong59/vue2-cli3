/**
 * 将数组做前端分页+搜索
 * @param  {dataList} 数据数组
 * @param  {option} 分页条件,pageNo(页数)，pageSize(页码)，searchContent(过滤内容), filterKey(过滤用的key)等
 */
export default (dataList, option) => {
  let { pageNo = 1, pageSize = 10, filterKey = 'name', searchContent = '' } = option
  const filterList = dataList.filter(item => String(item[filterKey]).includes(searchContent))
  return {
    data: filterList.slice((pageNo - 1) * pageSize, pageNo * pageSize),
    total: filterList.length
  }
}
