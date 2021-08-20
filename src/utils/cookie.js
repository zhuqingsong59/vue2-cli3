/**
 * 前端cookie操作
 * @param  {Blob} blob
 * @param  {String} filename 想要保存的文件名称
 */
const cookies = {
  set (name, value, day) {
    // document.cookie = `${key}=${value};Domain=${document.location.hostname};path=/`
    if (day !== 0) { // 当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
      const expires = day * 24 * 60 * 60 * 1000
      const date = new Date(+new Date() + expires)
      document.cookie = name + '=' + escape(value) + ';expires=' + date.toUTCString() + ';path=/'
    } else {
      document.cookie = name + '=' + escape(value) + ';path=/'
    }
  },
  get(name) {
    let arr = null
    const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    arr = document.cookie.match(reg)
    if (arr) {
      return unescape(arr[2])
    } else {
      return null
    }
  },
  remove(name) {
    this.set(name, ' ', -1)
  }
}
export default cookies
