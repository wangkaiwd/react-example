## 添加产品参数

### 思路整理
```js
const list = [
  {
    valNameChs: "尹艳",
    valPropId: 0,
    propType: "radio",
    children: [
      {
        label: 'select1',
        value: '1'
      },
      {
        label: 'select2',
        value: '2'
      },
      {
        label: 'select3',
        value: '3'
      }
    ]
  },
  {
    valNameChs: "邱艳",
    valPropId: 1,
    propType: "date"
  },
  {
    valNameChs: "武丽",
    valPropId: 2,
    propType: "input"
  },
  {
    valNameChs: "武丽2",
    valPropId: 2,
    propType: "select",
    children: [
      {
        label: 'select1',
        value: '1'
      },
      {
        label: 'select2',
        value: '2'
      },
      {
        label: 'select3',
        value: '3'
      }
    ]
  },
]        
```
* 点击添加产品，会弹出模态框进行选择列表的渲染
* 选择完毕之后，点击确认会跟据已选内容进行列表渲染
  * 列表中之前有的内容，如果没有改变选中状态，不进行修改
  * 列表中之前有的内容如果取消选中，要进行删除
  * 新选中的内容要加载到列表中
  * 删除选中列表
* 表单提交，统一处理添加的产品参数
  