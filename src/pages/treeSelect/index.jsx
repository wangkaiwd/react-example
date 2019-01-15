import React, { Component } from 'react';
import { TreeSelect } from 'antd';
const TreeNode = TreeSelect.TreeNode;
const data = [
  {
    "provinceId": 1,
    "provinceName": "北京",
    "cities": [
      {
        "cityName": "北京市",
        "cityId": 35
      }
    ]
  },
  {
    "provinceId": 2,
    "provinceName": "天津",
    "cities": [
      {
        "cityName": "天津市",
        "cityId": 52
      }
    ]
  },
  {
    "provinceId": 3,
    "provinceName": "上海",
    "cities": [
      {
        "cityName": "上海市",
        "cityId": 99
      }
    ]
  },
  {
    "provinceId": 4,
    "provinceName": "重庆",
    "cities": [
      {
        "cityName": "重庆市",
        "cityId": 100
      }
    ]
  },
  {
    "provinceId": 5,
    "provinceName": "河北省",
    "cities": [
      {
        "cityName": "保定市",
        "cityId": 118
      },
      {
        "cityName": "沧州市",
        "cityId": 119
      },
      {
        "cityName": "承德市",
        "cityId": 120
      },
      {
        "cityName": "邯郸市",
        "cityId": 121
      },
      {
        "cityName": "衡水市",
        "cityId": 234
      },
      {
        "cityName": "廊坊市",
        "cityId": 235
      },
      {
        "cityName": "秦皇岛市",
        "cityId": 236
      },
      {
        "cityName": "石家庄市",
        "cityId": 237
      },
      {
        "cityName": "唐山市",
        "cityId": 238
      },
      {
        "cityName": "邢台市",
        "cityId": 239
      },
      {
        "cityName": "张家口市",
        "cityId": 240
      },
    ]
  },
  {
    "provinceId": 6,
    "provinceName": "自定义",
    "cities": [
      {
        "cityId": 248,
        "cityName": "自定义1"
      },
      {
        "cityId": 22229,
        "cityName": "自定义2"
      },
      {
        "cityId": 2222229,
        "cityName": "自定义3"
      }
    ]
  }
]
class MyTreeSelect extends Component {
  state = {
    treeData: []
  }
  onChange = (value, label, extra) => {
    // 全部清空置为空数组
    if (value.length === 0) {
      return this.setState({ treeData: value })
    }
    // 获得当前选择的省市组成的数组
    const data = extra.allCheckedNodes.map(item => {
      const province = item.node.props.parent
      const cities = item.node.props.current
      return { province, cities }
    })
    // 单独建立省数组和实数组
    const pro = [], cit = []
    // 将当前选中的去重省组成一个数组，将城市组成一个数组
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
    // 遍历省数组，然后通过provinceId找出对应的市，组合成最终结果
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
      delete itemCopy.cities
      // 为TreeNode组件传入的其它属性，都会显示到extra(onChange的第三个参数)上，extra.allCheckedNodes上边
      return (
        <TreeNode
          parent={itemCopy}
          current={item.cities}
          key={item.provinceId}
          value={item.provinceId}
          title={item.provinceName}
        >
          {this.createSubTree(item)}
        </TreeNode>
      )
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
