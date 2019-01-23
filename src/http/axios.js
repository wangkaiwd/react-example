/**
 * Created by wangkai on 2019/1/23
 * Desc: axios配置封装
 */
import axios from 'axios';
import baseURL from './reqUrls';

const Axios = axios.create({
  timeout: 30000,
  baseURL
});

export default Axios;