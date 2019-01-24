/**
 * Created by wangkai on 2019/1/23
 * Desc: axios配置封装
 */
import axios from 'axios';
import { message } from 'antd';
import baseURL from './reqUrls';
import qs from 'qs';

const Axios = axios.create({
  timeout: 30000,
  baseURL
});
Axios.interceptors.request.use(
  config => {
    console.log('请求成功', config);
    if (config.method === 'post') {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  err => {
    console.log('请求失败', err);
    return Promise.reject(err);
  }
);
Axios.interceptors.response.use(
  res => {
    console.log('响应成功', res);
    if (res.status === 200) {
      return res.data;
    }
    return Promise.reject(res.data);
  },
  err => {
    console.log('响应失败:', err);
    if (err.message.includes('timeout')) {
      message.error('响应超时,请刷新浏览器重试!');
    } else {
      message.error('响应失败,请刷新浏览器重试!');
    }
    return Promise.reject(err);
  }
);

export default Axios;