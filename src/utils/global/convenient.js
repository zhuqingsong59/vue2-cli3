/**
 * 便捷函数集合
 */
class Convenient {
  constructor() {}
  type (variable) {
    return Object.prototype.toString.call(variable)
  }
  // 简单的深拷贝 无法复制函数
  simpleCopy (obj) {
    return JSON.parse(JSON.stringify(obj))
  }
  // 数组去重
  uniqueArr (arr) {
    return [...new Set(arr)]
  }
  // 防抖
  debounce (handle, delay) {
    let timer = null
    return function () {
        var _self = this,
            _args = arguments
        clearTimeout(timer)
        timer = setTimeout(function () {
            handle.apply(_self, _args)
        }, delay)
    }
  }
  // 节流
  throttle (handler, wait) {
    let lastTime = 0
    return function () {
      let nowTime = new Date().getTime()
      if (nowTime - lastTime > wait) {
        handler.apply(this, arguments)
        lastTime = nowTime
      }
    }
  }
}
export default new Convenient()
