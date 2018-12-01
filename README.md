## react-demo
### `react`项目结构理解
#### 1. `pwa`和`manifest.json`以及`serviceWorker`
#### 2. 为什么每一个组件中都要引入`React`
#### 3. `JSX`语法深入理解
#### 4. `ReactDOM`的作用

### `antDesign`使用小节
#### 1. 表格内容一行显示，超出指定宽度后显示...
```css
.columns { // 表格td的样式
  max-width: 0;
}
.ell { // 表格内容的样式
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```
```jsx
title: 'Address',
dataIndex: 'address',
key: 'address',
className: styles.columns,
  // width: 100,
render: (text) => {
  return (
    <div className={styles.ell}>{text}</div>
  )
}
```
**这里要注意的地方：给td设置`max-width: 0;`并且子元素不能是行内元素**
