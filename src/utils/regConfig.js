/**
 * @Author: wangkai
 * @Date: 2018/9/13
 * @Last Modified by: wangkai
 * @Desc: 常用的正则规则
 **/
export const regExpConfig = {
  mobile: /^1([3|4|5|7|8|])\d{9}$/, // 手机号码
  telephone: /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/, // 固定电话
  num: /^[0-9]*$/, // 数字
  phoneNo: /(^1([3|4|5|7|8|])\d{9}$)|(^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$)/, // 电话或者手机
  policeNo: /^[0-9A-Za-z]{4,10}$/, // 账号4-10位数字或字母组成
  pwd: /^[0-9A-Za-z]{6,16}$/, // 密码由6-16位数字或者字母组成
  isNumAlpha: /^[0-9A-Za-z]*$/, // 字母或数字
  isAlpha: /^[a-zA-Z]*$/, // 是否字母
  isNumAlphaCn: /^[0-9a-zA-Z\u4E00-\uFA29]*$/, // 是否数字或字母或汉字
  isPostCode: /^[\d\-]*$/i, // 是否邮编
  isNumAlphaUline: /^[0-9a-zA-Z_]*$/, // 是否数字、字母或下划线
  isNumAndThanZero: /^([1-9]\d*(\.\d+)?|0)$/, // 是否为整数且大于0/^[1-9]\d*(\.\d+)?$/
  isNormalEncode: /^(\w|[\u4e00-\u9fa5]){0,}$/, // 是否为非特殊字符（包括数字字母下划线中文）
  isTableName: /^[a-zA-Z][A-Za-z0-9#$_\-]{0,29}$/, // 表名
  isInt: /^-?\d+$/, // 整数
  isTableOtherName: /^[\u4e00-\u9fa5]{0,20}$/, // 别名
  isText_30: /^(\W|\w{1}){0,30}$/, // 匹配30个字符，字符可以使字母、数字、下划线、非字母，一个汉字算1个字符
  isText_50: /^(\W|\w{1}){0,50}$/, // 匹配50个字符，字符可以使字母、数字、下划线、非字母，一个汉字算1个字符
  isText_20: /^(\W|\w{1}){0,20}$/, // 匹配20个字符，字符可以使字母、数字、下划线、非字母，一个汉字算1个字符
  isText_100: /^(\W|\w{1}){0,100}$/, // 匹配100个字符，字符可以使字母、数字、下划线、非字母，一个汉字算1个字符
  isText_250: /^(\W|\w{1}){0,250}$/, // 匹配250个字符，字符可以使字母、数字、下划线、非字母，一个汉字算1个字符
  isNotChina: /^[^\u4e00-\u9fa5]{0,}$/, // 不为中文
  IDcard: /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/, // 身份证
  num1: /^[1-9]*$/, // 数字
  imgType: /image\/(png|jpg|jpeg|gif)$/, // 上传图片类型
  isChina: /^[\u4e00-\u9fa5]{2,8}$/,
  isNozeroNumber: /^\+?[1-9]\d*$/, // 大于零的正整数
  float: /^\d+(\.?|(\.\d+)?)$/, // 匹配正整数或者小数 或者0.这个特殊值
}