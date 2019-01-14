import React, { Component } from 'react';
import { TreeSelect } from 'antd';
const TreeNode = TreeSelect.TreeNode;
import data from './data'
class MyTreeSelect extends Component {
  state = {
    treeData: []
  }
  onChange = (value, label, extra) => {
    // 全部清空置为空数组
    if (value.length === 0) {
      return this.setState({ treeData: value })
    }
    const data = extra.allCheckedNodes.map(item => {
      const province = item.node.props.parent
      const cities = item.node.props.current
      return { province, cities }
    })
    // 建立省市区数组
    const pro = [], cit = []
    data.map(one => {
      // 去除重复的省
      const hasPro = pro.find((subOne = {}) => one.province.provinceId === subOne.provinceId)
      !hasPro && pro.push(one.province)
      if (toString.call(one.cities) === "[object Array]") {
        one.cities.map(item => cit.push(item))
        return
      }
      cit.push(one.cities)
    })
    const treeData = pro.map(item => {
      const cities = []
      for (let city of cit) {
        if (city.provinceId === item.provinceId) {
          cities.push(city)
        }
      }
      item.cities = cities
      return item
    })
    console.log('array', treeData)
    this.setState({ treeData })
  }
  createTree = () => {
    return data.map(item => {
      const itemCopy = JSON.parse(JSON.stringify(item))
      item.cities.map(subItem => {
        subItem.provinceId = item.provinceId
        return subItem
      })
      // console.log('item', item.cities)
      delete itemCopy.cities
      // console.log('itemcopy', itemCopy)
      return <TreeNode parent={itemCopy} current={item.cities} key={item.provinceId} value={item.provinceId} title={item.provinceName}>
        {this.createSubTree(item)}
      </TreeNode>
    })
  }
  createSubTree = (item) => {
    const parentItem = JSON.parse(JSON.stringify(item))
    delete parentItem.cities
    return item.cities.map(subItem => {
      subItem.provinceId = item.provinceId
      return (
        <TreeNode
          key={subItem.cityId}
          parent={parentItem}
          current={subItem}
          value={subItem.cityId}
          title={subItem.cityName}
        />
      )
    })
  }
  render() {
    return (
      <div>
        <TreeSelect
          showSearch
          style={{ width: 300 }}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          placeholder="Please select"
          allowClear
          treeCheckable={true}
          showCheckedStrategy={TreeSelect.SHOW_CHILD}
          onChange={this.onChange}
          onSelect={this.onSelect}
        >
          {this.createTree()}
        </TreeSelect>
      </div>
    );
  }
}

export default MyTreeSelect;

const array = [
  {
    "provinceId": 52570,
    "provinceName": "xE8225dmye",
    "cities": [
      {
        "cityId": 52825,
        "cityName": "ra9HCAJKpu"
      },
      {
        "cityId": 53377,
        "cityName": "6i1AOIxZcA"
      },
      {
        "cityId": 54298,
        "cityName": "FVT771bn9q"
      }
    ]
  },
  {
    "provinceId": 55215,
    "provinceName": "HMnxHBZe5p",
    "cities": [
      {
        "cityId": 56167,
        "cityName": "eyVEfsJJGT"
      },
      {
        "cityId": 56465,
        "cityName": "KtMNS9yM8t"
      },
      {
        "cityId": 57415,
        "cityName": "B0QbrooKa1"
      }
    ]
  },
  {
    "provinceId": 57687,
    "provinceName": "KYzLmvqfyT",
    "cities": [
      {
        "cityId": 58527,
        "cityName": "LmiV9PFEG7"
      },
      {
        "cityId": 59110,
        "cityName": "gJJzWd2iAP"
      },
      {
        "cityId": 59173,
        "cityName": "egj0GiglRh"
      }
    ]
  }
]