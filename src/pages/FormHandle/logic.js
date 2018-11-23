
const data = [
  {
    key: '1',
    property: '属性1',
    displayName: '显示名称1',
  },
  {
    key: '2',
    property: '属性2',
    displayName: '显示名称2'
  }
]
// filter: 创建一个新数组，其包含通过所提供函数实现的测试的所有元素的集合的数组，如果没有通过测试则返回空数组
const target = data.filter(item => item.key === '1')[0]
target.displayName = '最新的显示名称'
console.log('target', target)
console.log('data', data)

// 这里不能使用箭头函数，否则拿不到this
Array.prototype.myFilter = function (cb) {
  const len = this.length
  const result = []
  for (let i = 0; i < len; i++) {
    // 这里传undefined也可以
    if (cb.call(null, this[i], i, this)) {
      result.push(this[i])
    }
  }
  return result
}