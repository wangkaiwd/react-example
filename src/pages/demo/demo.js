const data = [
  { id: 'r1', color: '颜色1', capbitility: '容量1', other: '其它' },
  { id: 'r2', color: '颜色1', capbitility: '容量2', other: '其它' },
  { id: 'r3', color: '颜色2', capbitility: '容量1', other: '其它' }
]

const columns = [
  {
    title: 'T+编码',
    dataIndex: 'priceTsn',
    width: 200,
  },
  {
    title: '颜色',
    dataIndex: 'color',
    width: 150
  },
  {
    title: '容量',
    dataIndex: 'capbitility',
    width: 150
  }
]

// 目前结论，在写之前一定要明确目标，和后端协商，采纳别人的意见
// 尽可能找出需求中可以简化的点来进行需求和交互以及逻辑的简化，最大限度的减少代码的复杂度