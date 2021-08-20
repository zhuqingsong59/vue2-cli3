/**
 * 将blob数据转为文件并下载，文件名
 * @param  {Blob} blob
 * @param  {String} filename 想要保存的文件名称
 */
export function blobToExcel (data, filename) {
  let blob = new Blob([data], {type: 'application/vnd.ms-excel'})
  filename = decodeURI(filename)
  if (window.navigator.msSaveOrOpenBlob) {
    navigator.msSaveBlob(blob, filename)
  } else {
    const link = document.createElement('a')
    const body = document.querySelector('body')
    link.href = window.URL.createObjectURL(blob)
    filename = filename.replace(/.xlsx/g, '')
    link.download = filename + '.xlsx'
    // fix Firefox
    link.style.display = 'none'
    body.appendChild(link)
    link.click()
    body.removeChild(link)
    window.URL.revokeObjectURL(link.href)
  }
}
