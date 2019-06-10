/*
* 简单封装操作localStorage的一些方法
* localStorage的api:https://developer.mozilla.org/zh-CN/docs/Web/API/Storage
*   属性：
*     length: 返回一个整数，表示存储在Storage对象中的数据项的数量
*   方法：
*     getItem
*     setItem
*     removeItem
*     clear
*     key ： 该方法接受一个数值n作为参数，并返回存储中的第n个键名
* 阅读文档学到的一些知识：
*   1. window.localStorage 会返回一个Storage对象
*   2. localStorage.length (Storage对象有一个length的只读属性，表示存储在Storage对象里的数据项数量)
* */
const storage = {
  get (key) {
    return JSON.parse(localStorage.getItem(key));
  },
  set (key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  remove (key) {
    localStorage.removeItem(key);
  },
  clear () {
    localStorage.clear();
  },
  each (callback) {
    const length = localStorage.length;
    for (let i = 0; i < length; i++) {
      const key = localStorage.key(i);
      callback(key, this.get.call(storage, key), i);
    }
  }
};
export default storage;
